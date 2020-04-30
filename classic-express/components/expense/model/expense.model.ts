import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'expense'})
export class ExpenseModel extends CoreModel<ExpenseModel> {

  @Column
  name: string;

  @Column
  unit: string;

  @Column
  unit_price: Number;
}
