import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { InvoiceController } from '../../components/invoice/index';
import * as bodyParser from 'body-parser';
import { IInvoice } from '../../components/invoice/model/invoice.interface';
import { CompanyController } from '../../components/company';
import { UserCompanyModel } from '../../components/company/model/userCompany.model';
import { Op } from "sequelize";
import { CompanyModel } from '../../components/company/model/company.model';

export class InvoiceRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(
    private app: Express.Application,
    private invoiceController: InvoiceController,
    private companyController: CompanyController) {

      this.router = Express.Router();
  }

  register() {
    this.app.use('/invoice', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', (req, res) => {

      return this.invoiceController.query({
        include: [{ all: true }]
      })
        .then((companies) => res.status(200).json(companies))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byBuyerId/:id', (req, res) => {

      return this.invoiceController.query({
        where: {
          buyer_id: req.params.id
        },
        include: [{
          model: CompanyModel,
          as: 'buyer',
        }, {
          model: CompanyModel,
          as: 'seller'
        }]
      })
        .then((invoices) => res.status(200).json(invoices))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/bySellerId/:id', (req, res) => {

      return this.invoiceController.query({
        where: {
         seller_id: req.params.id
        },
        include: [{
          model: CompanyModel,
          as: 'buyer',
        }, {
          model: CompanyModel,
          as: 'seller'
        }]
      })
        .then((invoices) => res.status(200).json(invoices))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/detailed/:id', (req, res) => {
      const id = parseInt(req.params.id);

      return this.invoiceController.getDetailedInvoice(id)
        .then((invoices) => res.status(200).json(invoices))
        .catch((err) => res.status(500).json(err));
    });

    this.router.get('/byUserId/:userId',async (req, res) => {

      const userCompanies = await this.companyController.query({
        include: [{
          model: UserCompanyModel,
          where: {
            user_id: req.params.userId
          }
        }]
      });
      const query = userCompanies.reduce((acc, company) => {

        if (company.isOwnedByUser) {
          acc.push({ seller_id: company.id });
        } else {
          acc.push({ buyer_id: company.id });
        }

        return acc;
      }, [])

      this.invoiceController.query({
        where: {
          [Op.or]: query,
        },
        include: [{
          model: CompanyModel,
          as: 'buyer',
        }, {
          model: CompanyModel,
          as: 'seller'
        }]
      })
        .then((invoices) => res.status(200).json(invoices))
        .catch((err) => res.status(500).json(err));
    });

    this.router.post('/', bodyParser.json(), (req, res) => {
      const invoice: IInvoice = req.body;

      return this.invoiceController.save(invoice)
        .then(invoice => res.status(200).json(invoice))
        .catch(error => res.status(500).json(error));
    });

    this.router.put('/:id', bodyParser.json(), (req, res) => {
      const invoice: IInvoice = req.body;
      const id: number = parseInt(req.params.id);

      return this.invoiceController.update(id, invoice)
        .then(invoice => res.status(200).json(invoice))
        .catch(error => res.status(500).json(error));
    });

    this.router.delete('/:id', bodyParser.json(), (req, res) => {
      const id: number = parseInt(req.params.id);

      return this.invoiceController.delete(id)
        .then(() => res.status(200).json({message: 'OK!'}))
        .catch(error => res.status(500).json(error));
    });
  }
}