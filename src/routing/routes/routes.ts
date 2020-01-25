import * as Express from 'express';

import { IRoute } from '../models/route.models';
import { MainRouter } from './main.router';
import { UserRouter } from './user.router';

import { UserController, UserDao } from '../../components/user/index';
import { CompanyController, CompanyDao, UserCompanyDao, UserCompanyController } from '../../components/company';
import { CompanyRouter } from './company.router';
import { InvoiceDao, InvoiceController } from '../../components/invoice';
import { InvoiceRouter } from './invoice.router';
import { ProductRouter } from './product.router';
import { ProductController, ProductDao } from '../../components/product';
import { InvoiceProductDao } from '../../components/invoiceProduct/dao/invoiceProduct.dao';

export class RoutesManager {
  myRoutes: IRoute[];

  //import and init all routes
  constructor(private app: Express.Application) {
    const userDao = new UserDao();
    const userController = new UserController(userDao);
    const companyDao = new CompanyDao();
    const companyController = new CompanyController(companyDao);
    const userCompanyDao = new UserCompanyDao();
    const userCompanyController = new UserCompanyController(userCompanyDao);
    const productDao: ProductDao = new ProductDao();
    const productController: ProductController = new ProductController(productDao);
    const invoiceDao: InvoiceDao = new InvoiceDao();
    const invoiceController: InvoiceController = new InvoiceController(invoiceDao, new InvoiceProductDao, productDao);

    this.myRoutes = [
      new MainRouter(app), // all routes imported after this one will require auth to access
      new UserRouter(app, userController),
      new CompanyRouter(app, companyController, userCompanyController),
      new InvoiceRouter(app, invoiceController, companyController),
      new ProductRouter(app, productController)
    ];
  }

  registerAll() {
    this.myRoutes.forEach(route => {
      route.register();
    })
  }
}
