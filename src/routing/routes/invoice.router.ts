import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { InvoiceController, IInvoice } from '../../components/invoice/index';
import bodyParser = require('body-parser');

export class InvoiceRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private invoiceController: InvoiceController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/invoice', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', (req, res) => {
      this.invoiceController.getAll()
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const data: IInvoice = req.body;

      this.invoiceController.save(data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const data: IInvoice = req.body;

      this.invoiceController.update(req.params.id, data)
        .then(response => res.status(200).json(response))
        .catch(err => res.statsu(500).send(err.message));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      this.invoiceController.delete(req.params.id)
        .then(() => res.status(200).send('OK!'))
        .catch(err => res.statsu(500).send(err.message));
    });
  }
}