import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { CompanyController, ICompany } from '../../components/company/index';
import bodyParser = require('body-parser');

export class CompanyRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private companyController: CompanyController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/company', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', (req, res) => {
      this.companyController.getAll()
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const data: ICompany = req.body;

      this.companyController.save(data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const data: ICompany = req.body;

      this.companyController.update(req.params.id, data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      this.companyController.delete(req.params.id)
        .then(() => res.status(200).send('OK!'))
        .catch(err => res.statsu(500).send(err.message));
    });
  }
}
