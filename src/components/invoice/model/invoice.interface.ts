import { ICore } from '../../core/model';
import { CompanyModel } from '../../company/model/company.model';
import { IInvoiceProduct } from '../../invoiceProduct/model/invoiceProduct.interface';

export interface IInvoice extends ICore {
  seller: CompanyModel;
  seller_id?: Number;
  buyer: CompanyModel;
  buyer_id?: Number;
  invoiceProducts: IInvoiceProduct[];
  total_netto: number;
  total_brutto: number;
}