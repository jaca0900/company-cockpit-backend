import { UserCompanyModel } from "./model/userCompany.model";
import { IUserCompany } from "./model/userCompany.interface";
import { UserCompanyDao } from "./dao/userCompany.dao";
import { CoreController } from "../core/ core.controller";

export class UserCompanyController extends CoreController<UserCompanyModel, IUserCompany, UserCompanyDao> {
  constructor(private companyDao: UserCompanyDao) {
    super(companyDao);
  }
}