import { CoreDao } from "../../core/dao/core.dao";
import { ISequelizeModel } from "../../core/model";
import { UserCompanyModel } from "../model/userCompany.model";
import { IUserCompany } from "../model/userCompany.interface";

export class UserCompanyDao extends CoreDao<UserCompanyModel, IUserCompany, { [key: string]: any }> {
  constructor () {
    super(<ISequelizeModel<UserCompanyModel, IUserCompany>> UserCompanyModel);
  }
}
