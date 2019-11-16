import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'user'})
export class UserModel extends CoreModel<UserModel> {

  @Column
  login: string;

  @Column
  password: string;

  @Column
  e_mail: string;

  @Column
  first_name: string;

  @Column
  last_name: string;
}
