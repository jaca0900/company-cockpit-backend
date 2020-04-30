import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { ProductController } from '../../components/product';
import * as bodyParser from 'body-parser';
import { IProduct } from '../../components/product/model/product.interface';

export class ProductRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private productController: ProductController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/product', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', (req, res) => {

      return this.productController.getAll()
        .then((expenses) => res.status(200).json(expenses))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byId/:id', (req, res) => {

      return this.productController.query({
        where: {
          id: req.params.id
        }
      })
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(500).json(err));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const product: IProduct = req.body;

      return this.productController.save(product)
        .then(product => res.status(200).json(product))
        .catch(error => res.status(500).json(error));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const product: IProduct = req.body;
      const id: number = parseInt(req.params.id);

      return this.productController.update(id, product)
        .then(product => res.status(200).json(product))
        .catch(error => res.status(500).json(error));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      const id: number = parseInt(req.params.id);

      return this.productController.delete(id)
        .then(() => res.status(200).json({message: 'OK!'}))
        .catch(error => res.status(500).json(error));
    });
  }
}
