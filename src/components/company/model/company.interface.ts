import { ICore } from '../../core/model';

export interface ICompany extends ICore {
  name: string;
  nip: string;
  address: string;
}