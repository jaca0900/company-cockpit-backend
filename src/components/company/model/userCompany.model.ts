import { Column, Table, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';

@Table({ tableName: 'user_company'})
export class UserCompanyModel extends CoreModel<UserCompanyModel> {

  @Column
  user_id: string;

  @Column
  own_company_id: string;

  @Column
  contractor_id: string;
}
