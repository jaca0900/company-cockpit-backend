import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { PkdController } from '../../components/pkd/index';
import bodyParser = require('body-parser');

export class PkdRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private pkdController: PkdController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/pkd', this.router);

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
