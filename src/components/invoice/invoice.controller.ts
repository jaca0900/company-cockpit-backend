import { CoreController } from '../core/ core.controller';
import { InvoiceModel } from './model/invoice.model';
import { IInvoice } from './model/invoice.interface';
import { InvoiceDao } from './dao/invoice.dao';

export class InvoiceController extends CoreController<InvoiceModel, IInvoice, InvoiceDao> {
  constructor(private invoiceDao: InvoiceDao) {
    super(invoiceDao);
  }
}