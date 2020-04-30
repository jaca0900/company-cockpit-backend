import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './model/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
