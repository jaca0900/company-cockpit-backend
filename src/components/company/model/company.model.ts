import { Column, Table, BelongsTo, BelongsToMany, HasMany, HasOne } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { InvoiceModel } from '../../invoice/model/invoice.model';
import { UserCompanyModel } from './userCompany.model';

@Table({ tableName: 'company'})
export class CompanyModel extends CoreModel<CompanyModel> {

  @Column
  nip: string;

  @Column
  company_name: string;

  @Column
  address: string;

  @Column
  is_owned_by_user: Boolean;

  @HasMany(() => InvoiceModel, 'buyer_id')
  boughtInvoices: InvoiceModel[];

  @HasMany(() => InvoiceModel, 'seller_id')
  soldInvoices: InvoiceModel[];

  @HasOne(() => UserCompanyModel)
  userCompanies: UserCompanyModel[];
}
