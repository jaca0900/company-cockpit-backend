import { CoreController } from '../core/ core.controller';
import { PkdModel } from './model/pkd.model';
import { IPkd } from './model/pkd.interface';
import { PkdDao } from './dao/pkd.dao';

export class PkdController extends CoreController<PkdModel, IPkd, { [key: string]: any }, PkdDao> {
  constructor(private pkdDao: PkdDao) {
    super(pkdDao);
  }
}