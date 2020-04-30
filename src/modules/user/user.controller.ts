import { UserService } from './service/user.service';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
// import { IUser } from './model/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  public async login(@Body() body: { [key: string]: any }) {
    const { login, password } = body;

    return await this.userService.login(login, password);
  }

  @Get()
  public async findAll() {
    return await this.userService.findAll()
  }
}
