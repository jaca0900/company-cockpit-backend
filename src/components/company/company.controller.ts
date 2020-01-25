import { CoreController } from '../core/ core.controller';
import { CompanyModel } from './model/company.model';
import { ICompany } from './model/company.interface';
import { CompanyDao } from './dao/company.dao';
import { IViewCompany } from './model/viewCompanyInterface';

export class CompanyController extends CoreController<CompanyModel, ICompany, IViewCompany, CompanyDao> {
  constructor(private companyDao: CompanyDao) {
    super(companyDao);
  }

  // async createForUser (userId, company) {
  //   const saved = await super.save(company);
    
  //   return saved;
  // }
}