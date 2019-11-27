import * as Express from 'express';
import { IRoute } from '../models/route.models';

export class MainRouter implements IRoute {
  private router: Express.Router;

  constructor(private app: Express.Application) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/', this.router);

    // allow options requests without this the requests
    // will get cought in session validation
    this.router.options('/*', (req, res) => {
      res.send({ status: 'ok' });
    });

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/', (req, res) => {
      res.status(200).send('IT LIVES!!!!!!!');
    });
  }
}
