import { CoreDao } from "../../core/dao/core.dao"
import { ProductModel } from "../model/product.model";
import { IProduct } from "../model/product.interface";
import { ISequelizeModel } from "../../core/model";

export class ProductDao extends CoreDao<ProductModel, IProduct> {
  constructor() {
    super(<ISequelizeModel<ProductModel, IProduct>> ProductModel);
  }
}