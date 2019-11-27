import * as Express from 'express';

import { IRoute } from '../models/route.models';
import { MainRouter } from './main.router';
import { UserRouter } from './user.router';

import { UserController, UserDao } from '../../components/user/index';

export class RoutesManager {
  myRoutes: IRoute[];

  //import and init all routes
  constructor(private app: Express.Application) {
    const userDao = new UserDao();
    const userController = new UserController(userDao);

    this.myRoutes = [
      new MainRouter(app), // all routes imported after this one will require auth to access
      new UserRouter(app, userController)
    ];
  }

  registerAll() {
    this.myRoutes.forEach(route => {
      route.register();
    })
  }
}
