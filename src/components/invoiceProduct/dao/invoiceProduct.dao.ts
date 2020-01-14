import { CoreDao } from "../../core/dao/core.dao"
import { InvoiceProductModel } from "../model/invoiceProduct.model";
import { IInvoiceProduct } from "../model/invoiceProduct.interface";
import { ISequelizeModel } from "../../core/model";

export class InvoiceProductDao extends CoreDao<InvoiceProductModel, IInvoiceProduct> {
  constructor() {
    super(<ISequelizeModel<InvoiceProductModel, IInvoiceProduct>> InvoiceProductModel);
  }
}