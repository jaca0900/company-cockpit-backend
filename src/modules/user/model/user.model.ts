import { CoreModel } from '../../core/model/core.model';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserModel extends CoreModel {

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  e_mail: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  // need to add intermediate
  // @HasMany(() => CompanyModel)
  // contractors: CompanyModel[];

  // @HasMany(() => CompanyModel)
  // ownCompanies: CompanyModel[];
}
