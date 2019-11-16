import { Column, Model } from 'sequelize-typescript';

export class CoreModel<T> extends Model<T> {

  @Column
  id: Number;
 
  @Column
  birthday: Date;

  @Column
  createAt: Date;

  @Column
  createdBy: Number;

  @Column
  updatedAt: Date;

  @Column
  updatedBy: Number
}
