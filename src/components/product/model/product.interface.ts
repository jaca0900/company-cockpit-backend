import { ICore } from '../../core/model';

export interface IProduct extends ICore {
  login: string;
  password: string;
  e_mail: string;
  first_name: string;
  last_name: string;
}