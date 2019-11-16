import { CoreModel, ICore } from './model/index';
import { CoreDao } from './dao/core.dao'

export class CoreController
  <M extends CoreModel<M>, 
  I extends ICore,
  D extends CoreDao<M, I>> {

  constructor(private dao: D) {}

  public getAll(): Promise<I[]> {
    return this.dao.findAll({});
  }

  public query(options: { [key: string]: any}): Promise<I[]> {
    return this.dao.findAll(options);
  }

  public save(data: I): Promise<M> {
    return this.dao.save(data);
  }

  public update(id: number, data: I): Promise<[ number, I[] ]> {
    return this.dao.update(id, data);
  }

  public delete(id: Number): Promise<Number> {
    return Promise.resolve(id);
  }
}