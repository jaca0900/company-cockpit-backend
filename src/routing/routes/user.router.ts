import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { UserController } from '../../components/user/index';
import bodyParser = require('body-parser');

export class UserRouter implements IRoute {
  // private starterController: StarterController;
  private router: Express.Router;

  constructor(private app: Express.Application, private userController: UserController) {
    this.router = Express.Router();
  }

  register() {
    this.app.use('/user', this.router);

    this.router.get('/', bodyParser.json(), (req, res) => {
      const query = req.body;

      this.userController.getAll()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send(err.message));
    });

    // this route wont be accessible until user succesfully authorizes
    this.router.post('/login', bodyParser.json(), (req, res) => {
      const query = req.body;

      this.userController.login(query.login, query.password)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).send(err.message));
    });
  }
}
