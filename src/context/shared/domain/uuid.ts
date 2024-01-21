import { v4 as uuid } from "uuid";

export interface IUUID {
  id?: string;
}

export class UUID {
  static Generator(): IUUID {
    return {
      id: uuid(),
    };
  }
}
