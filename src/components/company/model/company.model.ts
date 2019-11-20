import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'company'})
export class CompanyModel extends CoreModel<CompanyModel> {

  @Column
  name: string;

  @Column
  nip: string;

  @Column
  address: string;
}
