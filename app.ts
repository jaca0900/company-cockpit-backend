import * as Express from 'express';
import { RoutesManager } from './src/routing/routes/routes';
import * as env from './config/environments';
import * as bodyParser from 'body-parser';
import {Sequelize} from 'sequelize-typescript';
// import { CoreModel } from './src/components/core/model/core.model';

const sequelize =  new Sequelize({
        database: 'CompanyManager',
        dialect: 'mysql',
        username: 'root',
        password: 'root',
        host: 'localhost',
        port: 3306,
        models: [ __dirname + '/src/components/**/model/*.model.ts'], // or [Player, Team],
        modelMatch: (filename, member) => {
          const parts = filename.split('.');
          let first = parts[0];
          let second = parts[1];

          first = first[0].toUpperCase() + first.slice(1);
          second = second[0].toUpperCase() + second.slice(1);

          return `${first}${second}` === member;
        }
});

const environment = env.get();
const port: number = environment.port;
const app: Express.Application = Express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  //basic CORS setup, allowig origin from env
  res.setHeader("Access-Control-Allow-Origin", environment.origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin," +
    " Accept, X-Requested-With, Content-Type, Access-Control-Request-Method," +
    " Access-Control-Request-Headers, access-control-allow-origin, Access-Control-Allow-Origin");

  next();
});

app.listen(port, async () => {
  await sequelize.sync();

  console.log(`Ready on http://localhost:${port} !`);
});

let routes = new RoutesManager(app);
routes.registerAll();