import { ICore } from '../../core/model';

export interface IInvoice extends ICore {

  total_netto: number;
  total_brutto: number;
  type: string;

  // foreign keys hasOne
  seller_id: number;
  buyer_id: number;
  user_company_id: number;
}