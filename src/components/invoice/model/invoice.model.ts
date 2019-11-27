import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'invoice'})
export class InvoiceModel extends CoreModel<InvoiceModel> {

  @Column
  total_netto: number;

  @Column
  total_brutto: number;

  @Column
  type: string;

  // foreign keys hasOne
  @Column
  seller_id: number;

  @Column
  buyer_id: number;

  @Column
  user_company_id: number;
}
