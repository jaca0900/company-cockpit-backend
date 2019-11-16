import { CoreModel, ICore, ISequelizeModel } from "../model/index";
import { Table, Column } from "sequelize-typescript";

export class CoreDao<M extends CoreModel<M>, I extends ICore> {

  // TODO create or get A model interface
  constructor (
    private Model: ISequelizeModel<M, I>) {}

  public save (data: I): Promise<M> {
    const model = this.Model.build(data);

    return model.save();
  }

  public async update(id: number, data: I): Promise<[number, I[]]> {
    return this.Model.update(data, { 
      where: { id }
    });
  }

  public findAll(options: { [key: string]: any }): Promise<I[]> {
    return this.Model.findAll(options);
  }

  public destroy(options: { [key: string]: any }): Promise<Number> {
    return this.Model.destroy(options);
  }
}

// @Table
// class CompanyModel extends CoreModel<CompanyModel> {
  
//   @Column
//   nip: string;
// }

// interface ICompany extends ICore {
//   nip: string;
// }

// class CompanyDao extends CoreDao<CompanyModel, ICompany> {
//   constructor() {
//     super(<ISequelizeModel<
//       CompanyModel, ICompany>> CompanyModel);
//   }

//   public build(data: ICompany) {

//     return super.build(data);
//   }
// }