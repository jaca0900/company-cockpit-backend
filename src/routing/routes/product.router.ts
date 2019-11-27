import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { ProductController, IProduct } from '../../components/product/index';
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
    this.router.get('/', (req, res) => {
      this.productController.getAll()
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const data: IProduct = req.body;

      this.productController.save(data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const data: IProduct = req.body;

      this.productController.update(req.params.id, data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      this.productController.delete(req.params.id)
        .then(() => res.status(200).send('OK!'))
        .catch(err => res.statsu(500).send(err.message));
    });
  }
}
