import { CoreModel, ICore } from './model';
import { CoreDao } from './dao/core.dao'

export class CoreController
  <M extends CoreModel<M>, 
  I extends ICore,
  V,
  D extends CoreDao<M, I, V>> {

  constructor(private dao: D) {}

  public getAll(): Promise<V[]> {
    return this.dao.findAll({});
  }

  public query(options: { [key: string]: any}): Promise<V[]> {
    return this.dao.findAll(options);
  }

  public save(data: I): Promise<M> {
    return this.dao.save(data);
  }

  public update(id: Number, data: I): Promise<I> {
    return this.dao.update(id, data);
  }

  public delete(id: Number): Promise<Number> {
    return Promise.resolve(id);
  }
}
