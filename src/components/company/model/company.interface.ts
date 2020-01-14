import { ICore } from '../../core/model';

export interface ICompany extends ICore {
  nip: string;
  company_name: string;
  address: string;
}