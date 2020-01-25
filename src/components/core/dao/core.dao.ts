import { CoreModel, ICore, ISequelizeModel } from "../model/index";
import { Table, Column } from "sequelize-typescript";
import { ModelMaper } from "../model/model.mapper";

export class CoreDao<M extends CoreModel<M>, I extends ICore, V> {

  constructor (
    private Model: ISequelizeModel<M, I>) {}

  public save (data: I): Promise<M> {
    const model = this.Model.build(ModelMaper.interfaceToModel(data));

    return model.save();
  }

  public async update(id: Number, data: I): Promise<I> {
    await this.Model.update(ModelMaper.interfaceToModel(data), {
      where: { id }
    });

    return this.Model.findOne({
      where: { id }
    }).then(res => res.dataValues);
  }

  public findOne(options: { [key: string]: any }): Promise<V> {
    return this.Model.findOne(options)
      .then(res => res ? ModelMaper.modelToInterFace<V>(res.dataValues) : null)
  }

  public findAll(options: { [key: string]: any }): Promise<V[]> {
    return this.Model.findAll(options)
      .then(res => res.map(r => ModelMaper.modelToInterFace<V>(r.dataValues)));
  }

  public destroy(options: { [key: string]: any }): Promise<Number> {
    return this.Model.destroy(options);
  }
}
