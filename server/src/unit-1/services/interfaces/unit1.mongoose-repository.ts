import { Unit1Document } from '../../domain';
export type SaveUnit1Options = {
  id?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
export abstract class Unit1MongooseRepository {
  abstract create(unit: SaveUnit1Options): Promise<Unit1Document>;
  abstract update(unit: Unit1Document): Promise<Unit1Document>;
  abstract findOne(id: string): Promise<Unit1Document | undefined>;
  abstract delete(unit: Unit1Document): Promise<void>;
}
