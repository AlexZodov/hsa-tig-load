import { Unit1 } from '../../domain';

export abstract class Unit1Repository {
  abstract save(unit: Unit1): Promise<Unit1>;
  abstract findOne(id: string): Promise<Unit1 | undefined>;
  abstract delete(unit: Unit1): Promise<void>;
}
