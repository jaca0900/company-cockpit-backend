import * as Express from 'express';
import { Db } from 'mongodb'

import { IRoute } from '../models/route.models';
import { MainRouter } from './main.router';

export class RoutesManager {
  myRoutes: IRoute[];

  //import and init all routes
  constructor(private app: Express.Application) {
    this.myRoutes = [
      new MainRouter(app, Express.Router()) // all routes imported after this one will require auth to access
    ];
  }

  registerAll() {
    this.myRoutes.forEach(route => {
      route.register();
    })
  }
}
