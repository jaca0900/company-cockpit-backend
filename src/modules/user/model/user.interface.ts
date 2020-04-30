import { ICoreModel } from '../../core/model/ICore.model';

export interface IUser extends ICoreModel {
  login: string;
  password: string;
  e_mail: string;
  first_name: string;
  last_name: string;
}
