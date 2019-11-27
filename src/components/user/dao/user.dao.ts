import { CoreDao } from "../../core/dao/core.dao"
import { UserModel } from "../model/user.model";
import { IUser } from "../model/user.interface";
import { ISequelizeModel } from "../../core/model";

export class UserDao extends CoreDao<UserModel, IUser> {
  constructor() {
    super(<ISequelizeModel<UserModel, IUser>> UserModel);
  }
}