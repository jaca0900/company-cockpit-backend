import { CoreModel } from "./core.model";
import { ICore } from "./core.interface";

export interface ISequelizeModel
  <M extends CoreModel<M>, I extends ICore> {
  findAll(options?: { [key: string]: any }): Promise<I[]>;

  findByPk(options?: { [key: string]: any }): Promise<I>;

  findOne(options?: { [key: string]: any }): Promise<I>;

  build(record?: I, options?: { [key: string]: any }): M;

  create(values: I, options?: { [key: string]: any }): Promise<I>;

  upsert(values: I, options?: { [key: string]: any }): Promise<boolean>;

  truncate(options?: { [key: string]: any }): Promise<void>;

  destroy(options?: { [key: string]: any }): Promise<number>;

  restore(options?: { [key: string]: any }): Promise<void>;

  update(values: I, options: { [key: string]: any } ): Promise<[number, I[]]>;
}