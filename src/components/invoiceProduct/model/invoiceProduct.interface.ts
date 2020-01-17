import { IProduct } from "../../product/model/product.interface";
import { ICore } from "../../core/model";

export interface IInvoiceProduct extends ICore {
  invoice_id: Number,
  product_id?: Number;
  product: IProduct;
  units: number;
}