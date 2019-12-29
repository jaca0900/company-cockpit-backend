import { ICore } from '../../core/model';

export interface IPkd extends ICore {
  code: string;
  description: string;
  vat: string;
}