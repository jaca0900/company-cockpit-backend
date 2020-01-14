import { Column, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { InvoiceModel } from '../../invoice/model/invoice.model';
import { ProductModel } from '../../product/model/product.model';

@Table({ tableName: 'invoice_product'})
export class InvoiceProductModel extends CoreModel<InvoiceModel>{

  @ForeignKey(() => ProductModel)
  @Column
  product_id: number;

  @BelongsTo(() => ProductModel)
  invoiceProduct: ProductModel;

  @ForeignKey(() => InvoiceModel)
  @Column
  invoice_id: number

  @BelongsTo(() => InvoiceModel)
  invoice: InvoiceModel;

  units: number
}