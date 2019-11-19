import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'pkd'})
export class PkdModel extends CoreModel<PkdModel> {

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
