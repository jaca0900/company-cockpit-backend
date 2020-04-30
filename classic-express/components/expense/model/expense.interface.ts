import { ICore } from '../../core/model';

export interface IExpense extends ICore {
  name: string;
  unit: string;
  unit_price: Number;
}