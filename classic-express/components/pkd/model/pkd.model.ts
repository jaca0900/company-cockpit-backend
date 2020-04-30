import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'pkd'})
export class PkdModel extends CoreModel<PkdModel> {

  @Column
  code: string;

  @Column
  description: string;

  @Column
  vat: string;
}
