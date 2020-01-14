import { ICore } from ".";
import { CoreModel } from "./core.model";

export class ModelMaper {

  public static interfaceToModel<M extends CoreModel<M>>(iData) {

  }

  public static modelToInterFace<I extends ICore>(mData): I {
    const iData = <I>{};

    for (let key in mData) {

      const parts = key.split('_');

      if (parts.length > 1) {
        for (let i = 1; i < parts.length; i++) {
          let part = parts[i];
          part = part[0].toUpperCase() + part.substr(1);
          parts[i] = part;
        }
      }

      const newKey = parts.join('');
      iData[newKey] = mData[key];
    }

    return iData;
  }
}