import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class CoreModel<T> extends Model<T> {

  @PrimaryKey
  @Column
  id: Number;
 
  // @Column
  // birthday: Date;

  // @Column
  // createAt: Date;

  // @Column
  // createdBy: Number;

  // @Column
  // updatedAt: Date;

  // @Column
  // updatedBy: Number
}
