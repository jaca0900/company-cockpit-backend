import { CoreModel } from '../model/core.model';
import { Repository } from 'typeorm';
import { ICoreModel } from '../model/ICore.model';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class CoreService<
   Model extends CoreModel,
   IModel extends ICoreModel> {

   constructor(protected repository: Repository<Model>) {}

  private convertToQueryPartial(data: IModel) {
    const unknown = <unknown>data;

    return <QueryDeepPartialEntity<Model>> unknown;
  }

  public insert(data: IModel) {

    return this.repository.insert(
      this.convertToQueryPartial(data));
  }

   public update(id: number, data: IModel) {

    return this.repository.update(id,
      this.convertToQueryPartial(data));
  }

   public findAll() {

    return this.repository.find();
  }

   public query(queryObject: {[key: string]: any}) {

    return this.repository.find(queryObject);
  }

  public async remove(removeCriteria: {[key: string]: any}) {
    const entities = await this.query(removeCriteria);

    return this.repository.remove(entities);
  }
}
