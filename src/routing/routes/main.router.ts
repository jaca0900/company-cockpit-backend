import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { StarterController } from "../../components/starter.controller";

export class MainRouter implements IRoute {
  private starterController: StarterController;

  constructor(private app: Express.Application, private router: Express.Router) {
    this.starterController = new StarterController('IT LIVES!!!!!')
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
      res.status(200).send(this.starterController.say());
    });
  }
}
