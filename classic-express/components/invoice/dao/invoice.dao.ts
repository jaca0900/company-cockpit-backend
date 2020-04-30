import { CoreDao } from "../../core/dao/core.dao"
import { InvoiceModel } from "../model/invoice.model";
import { IInvoice } from "../model/invoice.interface";
import { ISequelizeModel } from "../../core/model";

export class InvoiceDao extends CoreDao<InvoiceModel, IInvoice, { [key: string]: any }> {
  constructor() {
    super(<ISequelizeModel<InvoiceModel, IInvoice>> InvoiceModel);
  }
}