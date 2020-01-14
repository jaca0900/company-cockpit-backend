import { Column, Table, HasMany } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { InvoiceProductModel } from '../../invoiceProduct/model/invoiceProduct.model';

@Table({ tableName: 'product'})
export class ProductModel extends CoreModel<ProductModel> {

  @Column
  name: string;

  @Column
  unit: string;

  @Column
  unit_price: Number;

  @HasMany(() => InvoiceProductModel)
  invoiceProduct: InvoiceProductModel;
}
