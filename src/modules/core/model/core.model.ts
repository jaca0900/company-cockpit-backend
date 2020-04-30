import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CoreModel {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // createdAt: Date;
  //
  // @Column()
  // updatedAt: Date;
}
