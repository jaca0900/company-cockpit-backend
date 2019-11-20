import * as Express from 'express';

import { IRoute } from '../models/route.models';
import { MainRouter } from './main.router';
import { UserRouter } from './user.router';

import { UserController, UserDao } from '../../components/user/index';
import { ProductController, ProductDao } from '../../components/product/index';
import { PkdController, PkdDao } from '../../components/pkd/index';
import { InvoiceController, InvoiceDao } from '../../components/invoice/index';
import { CompanyController, CompanyDao } from '../../components/company/index';
import { ProductRouter } from './product.router';
import { PkdRouter } from './pkd.router';
import { InvoiceRouter } from './invoice.router';
import { CompanyRouter } from './company.router';

export class RoutesManager {
  myRoutes: IRoute[];

  //import and init all routes
  constructor(private app: Express.Application) {
    const userDao = new UserDao();
    const userController = new UserController(userDao);

    const productDao = new ProductDao();
    const productController = new ProductController(productDao);

    const pkdDao = new PkdDao();
    const pkdController = new PkdController(pkdDao);

    const invoiceDao = new InvoiceDao();
    const invoiceController = new InvoiceController(invoiceDao);

    const companyDao = new CompanyDao();
    const companyController = new CompanyController(companyDao);

    this.myRoutes = [
      new MainRouter(app), // all routes imported after this one will require auth to access
      new UserRouter(app, userController),
      new ProductRouter(app, productController),
      new PkdRouter(app, pkdController),
      new InvoiceRouter(app, invoiceController),
      new CompanyRouter(app, companyController)
    ];
  }

  registerAll() {
    this.myRoutes.forEach(route => {
      route.register();
    })
  }
}
