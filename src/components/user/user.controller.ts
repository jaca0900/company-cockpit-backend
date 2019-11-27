import { CoreController } from '../core/ core.controller';
import { UserModel } from './model/user.model';
import { IUser } from './model/user.interface';
import { UserDao } from './dao/user.dao';

export class UserController extends CoreController<UserModel, IUser, UserDao> {
  constructor(private userDao: UserDao) {
    super(userDao);
  }

  // TODO: ADD JWT and password encyption
  async login(login, password) {
    const user = await this.userDao.findOne({ where: { login } });

    if (! user) {
      return Promise.reject(new Error('No user found'));
    }
 
    if (user.password !== password) {
      return Promise.reject(new Error('Wrong credentials'));
    }

    delete user.password;

    return user;
  }

}