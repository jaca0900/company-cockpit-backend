import { CoreDao } from "../../core/dao/core.dao"
import { PkdModel } from "../model/pkd.model";
import { IPkd } from "../model/pkd.interface";
import { ISequelizeModel } from "../../core/model";

export class PkdDao extends CoreDao<PkdModel, IPkd> {
  constructor() {
    super(<ISequelizeModel<PkdModel, IPkd>> PkdModel);
  }
}