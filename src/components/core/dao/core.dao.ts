import { CoreModel, ICore, ISequelizeModel } from "../model/index";
import { Table, Column } from "sequelize-typescript";
import { ModelMaper } from "../model/model.mapper";

export class CoreDao<M extends CoreModel<M>, I extends ICore> {

  constructor (
    private Model: ISequelizeModel<M, I>) {}

  public save (data: I): Promise<M> {
    const model = this.Model.build(data);

    return model.save();
  }

  public async update(id: Number, data: I): Promise<[number, I[]]> {
    return this.Model.update(data, { 
      where: { id }
    });
  }

  public findOne(options: { [key: string]: any }): Promise<I> {
    return this.Model.findOne(options)
      .then(res => res ? ModelMaper.modelToInterFace<I>(res.dataValues) : null)
  }

  public findAll(options: { [key: string]: any }): Promise<I[]> {
    return this.Model.findAll(options)
      .then(res => res.map(r => ModelMaper.modelToInterFace<I>(r.dataValues)));
  }

  public destroy(options: { [key: string]: any }): Promise<Number> {
    return this.Model.destroy(options);
  }
}
