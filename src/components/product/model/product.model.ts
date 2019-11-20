import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'product'})
export class ProductModel extends CoreModel<ProductModel> {

  @Column
  name: string;

  @Column
  unit: string;

  @Column
  unit_price: string;
}
