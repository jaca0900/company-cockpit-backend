import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { ExpenseController } from '../../components/expense';
import * as bodyParser from 'body-parser';
import { ICompany } from '../../components/company/model/company.interface';
import { IExpense } from '../../components/expense/model/expense.interface';

export class ExpenseRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private expenseController: ExpenseController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/expense', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', (req, res) => {

      return this.expenseController.getAll()
        .then((expenses) => res.status(200).json(expenses))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byId/:id', (req, res) => {

      return this.expenseController.query({
        where: {
          id: req.params.id
        }
      })
        .then((expenses) => res.status(200).json(expenses))
        .catch((err) => res.status(500).json(err));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const expense: IExpense = req.body;

      return this.expenseController.save(expense)
        .then(expense => res.status(200).json(expense))
        .catch(error => res.status(500).json(error));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const expense: IExpense = req.body;
      const id: number = parseInt(req.params.id);

      return this.expenseController.update(id, expense)
        .then(expense => res.status(200).json(expense))
        .catch(error => res.status(500).json(error));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      const id: number = parseInt(req.params.id);

      return this.expenseController.delete(id)
        .then(() => res.status(200).json({message: 'OK!'}))
        .catch(error => res.status(500).json(error));
    });
  }
}
