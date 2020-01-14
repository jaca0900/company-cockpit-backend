import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { PkdController } from '../../components/pkd/index';
import * as bodyParser from 'body-parser';
import { IPkd } from '../../components/pkd/model/pkd.interface';

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

      return this.pkdController.getAll()
        .then((expenses) => res.status(200).json(expenses))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byId/:id', (req, res) => {

      return this.pkdController.query({
        where: {
          id: req.params.id
        }
      })
        .then((pkds) => res.status(200).json(pkds))
        .catch((err) => res.status(500).json(err));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const pkd: IPkd = req.body;

      return this.pkdController.save(pkd)
        .then(pkd => res.status(200).json(pkd))
        .catch(error => res.status(500).json(error));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const pkd: IPkd = req.body;
      const id: number = parseInt(req.params.id);

      return this.pkdController.update(id, pkd)
        .then(pkd => res.status(200).json(pkd))
        .catch(error => res.status(500).json(error));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      const id: number = parseInt(req.params.id);

      return this.pkdController.delete(id)
        .then(() => res.status(200).json({message: 'OK!'}))
        .catch(error => res.status(500).json(error));
    });
  }
}
