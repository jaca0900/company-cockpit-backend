import { CoreController } from '../core/ core.controller';
import { ExpenseModel } from './model/expense.model';
import { IExpense } from './model/expense.interface';
import { ExpenseDao } from './dao/expense.dao';

export class ExpenseController extends CoreController<ExpenseModel, IExpense, ExpenseDao> {
  constructor(private expenseDao: ExpenseDao) {
    super(expenseDao);
  }
}