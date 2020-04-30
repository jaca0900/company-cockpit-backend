import { CoreController } from '../core/ core.controller';
import { ProductModel } from './model/product.model';
import { IProduct } from './model/product.interface';
import { ProductDao } from './dao/product.dao';

export class ProductController extends CoreController<ProductModel, IProduct, { [key: string]: any }, ProductDao> {
  constructor(private productDao: ProductDao) {
    super(productDao);
  }
}