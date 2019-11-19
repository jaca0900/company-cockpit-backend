import { CoreDao } from "../../core/dao/core.dao"
import { InvoiceModel } from "../model/invoice.model";
import { IInvoice } from "../model/invoice.interface";
import { ISequelizeModel } from "../../core/model";

export class InvoiceDao extends CoreDao<InvoiceModel, IInvoice> {
  constructor() {
    super(<ISequelizeModel<InvoiceModel, IInvoice>> InvoiceModel);
  }
}