import { Column, Table, HasMany } from 'sequelize-typescript';
import { CoreModel } from '../../core/model/core.model';
import { CompanyModel } from '../../company/model/company.model';

@Table({ tableName: 'user'})
export class UserModel extends CoreModel<UserModel> {

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

  // need to add intermediate
  // @HasMany(() => CompanyModel)
  // contractors: CompanyModel[];

  // @HasMany(() => CompanyModel)
  // ownCompanies: CompanyModel[];
}
