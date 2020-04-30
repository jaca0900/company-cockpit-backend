import { Column, Table, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { CompanyModel } from '../../company/model/company.model';
import { InvoiceProductModel } from '../../invoiceProduct/model/invoiceProduct.model';

@Table({ tableName: 'invoice'})
export class InvoiceModel extends CoreModel<InvoiceModel> {

  @ForeignKey(() => CompanyModel)
  @Column
  seller_id: number;

  @BelongsTo(() => CompanyModel, 'seller_id')
  seller: CompanyModel;

  @ForeignKey(() => CompanyModel)
  @Column
  buyer_id: number;

  @BelongsTo(() => CompanyModel, 'buyer_id')
  buyer: CompanyModel;

  @HasMany(() => InvoiceProductModel)
  invoiceProducts: InvoiceProductModel[];

  // foreign keys hasOne
  @Column
  total_netto: number;

  @Column
  total_brutto: number;

  @Column
  pay_date: Date;

  @Column
  creation_date: Date;

  @Column
  sell_date: Date;

  @Column
  invoice_number: string;

  @Column
  account_number: string;

  @Column
  payment_method: string;
}
