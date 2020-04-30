import { UserModel } from '../model/user.model';
import { IUser } from '../model/user.interface';
import { CoreService } from '../../core/service/core.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends CoreService<UserModel, IUser> {
  constructor(
    @InjectRepository(UserModel)
    usersRepository: Repository<UserModel>
  ) {
    super(usersRepository);
  }

  // TODO: make proper controller and service flow
  async login(login, password) {
    const user = await this.repository.findOne({ where: { login } });

    if (! user) {
      throw new Error('No user found');
    }

    if (user.password !== password) {
      throw new Error('Wrong credentials');
    }

    delete user.password;

    return user;
  }
}
