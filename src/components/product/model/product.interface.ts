import { ICore } from '../../core/model';

export interface IProduct extends ICore {
  name: string;
  unit: string;
  unit_price: string;
}