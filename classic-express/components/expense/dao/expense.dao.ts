import { CoreDao } from "../../core/dao/core.dao"
import { ExpenseModel } from "../model/expense.model";
import { IExpense } from "../model/expense.interface";
import { ISequelizeModel } from "../../core/model";

export class ExpenseDao extends CoreDao<ExpenseModel, IExpense, { [key: string]: any }> {
  constructor() {
    super(<ISequelizeModel<ExpenseModel, IExpense>> ExpenseModel);
  }
}