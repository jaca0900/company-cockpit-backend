import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { ProductController } from '../../components/product/index';
import bodyParser = require('body-parser');

export class ProductRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private productController: ProductController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/product', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', bodyParser.json(), (req, res) => {
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
    });
  }
}
