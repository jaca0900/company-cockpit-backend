import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { PkdController, IPkd } from '../../components/pkd/index';
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
    this.router.get('/', (req, res) => {
      this.pkdController.getAll()
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const data: IPkd = req.body;

      this.pkdController.save(data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const data: IPkd = req.body;

      this.pkdController.update(req.params.id, data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      this.pkdController.delete(req.params.id)
        .then(() => res.status(200).send('OK!'))
        .catch(err => res.statsu(500).send(err.message));
    });
  }
}
