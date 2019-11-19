import { Column, Table } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'product'})
export class ProductModel extends CoreModel<ProductModel> {

  @Column
  login: string;

  @Column
  password: string;

  @Column
  e_mail: string;

  @Column
  first_name: string;

  @Column
  last_name: string;
}
