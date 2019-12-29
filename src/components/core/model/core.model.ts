import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class CoreModel<T> extends Model<T> {

  @PrimaryKey
  @Column
  id: Number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
