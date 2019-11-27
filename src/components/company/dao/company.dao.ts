import { CoreDao } from "../../core/dao/core.dao"
import { CompanyModel } from "../model/company.model";
import { ICompany } from "../model/company.interface";
import { ISequelizeModel } from "../../core/model";

export class CompanyDao extends CoreDao<CompanyModel, ICompany> {
  constructor() {
    super(<ISequelizeModel<CompanyModel, ICompany>> CompanyModel);
  }
}