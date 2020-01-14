import { Column, Table, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { InvoiceModel } from '../../invoice/model/invoice.model';

@Table({ tableName: 'company'})
export class CompanyModel extends CoreModel<CompanyModel> {

  @Column
  nip: string;

  @Column
  company_name: string;

  @Column
  address: string;

  @HasMany(() => InvoiceModel, 'buyer_id')
  boughtInvoices: InvoiceModel[];

  @HasMany(() => InvoiceModel, 'seller_id')
  soldInvoices: InvoiceModel[];
}
