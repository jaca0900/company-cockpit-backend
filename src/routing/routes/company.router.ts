import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { CompanyController } from '../../components/company/index';
import * as bodyParser from 'body-parser';
import { ICompany } from '../../components/company/model/company.interface';

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

      return this.companyController.query({
        include: [{ all: true }]
      })
        .then((companies) => res.status(200).json(companies))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byId/:id', (req, res) => {

      return this.companyController.query({
        where: {
          id: req.params.id
        }
      })
        .then((companies) => res.status(200).json(companies))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byUserId/:id', (req, res) => {
      // TODO: updated to go by UserId

      return this.companyController.query({
        include: [{ all: true }]
      })
        .then((companies) => res.status(200).json(companies))
        .catch((err) => res.status(500).json(err));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const company: ICompany = req.body;

      return this.companyController.save(company)
        .then(company => res.status(200).json(company))
        .catch(error => res.status(500).json(error));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const company: ICompany = req.body;
      const id: number = parseInt(req.params.id);

      return this.companyController.update(id,company)
        .then(company => res.status(200).json(company))
        .catch(error => res.status(500).json(error));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      const id: number = parseInt(req.params.id);

      return this.companyController.delete(id)
        .then(() => res.status(200).json({message: 'OK!'}))
        .catch(error => res.status(500).json(error));
    });
  }
}
