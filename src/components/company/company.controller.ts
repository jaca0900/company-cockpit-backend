import { CoreController } from '../core/ core.controller';
import { CompanyModel } from './model/company.model';
import { ICompany } from './model/company.interface';
import { CompanyDao } from './dao/company.dao';

export class CompanyController extends CoreController<CompanyModel, ICompany, CompanyDao> {
  constructor(private companyDao: CompanyDao) {
    super(companyDao);
  }
}