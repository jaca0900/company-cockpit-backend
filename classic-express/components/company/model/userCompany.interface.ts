import { ICore } from "../../core/model";

export interface IUserCompany extends ICore {
  user_id: Number,
  company_id: Number
}