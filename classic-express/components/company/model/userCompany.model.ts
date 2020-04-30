import { Column, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { UserModel } from '../../user/model/user.model';
import { CompanyModel } from './company.model';

@Table({ tableName: 'user_company'})
export class UserCompanyModel extends CoreModel<UserCompanyModel> {

  @ForeignKey(() => UserModel)
  @Column
  user_id: string;

  @BelongsTo(() => UserModel)
  user: UserModel

  @ForeignKey(() => CompanyModel)
  @Column
  company_id: string;

  @BelongsTo(() => CompanyModel)
  company: CompanyModel
}
