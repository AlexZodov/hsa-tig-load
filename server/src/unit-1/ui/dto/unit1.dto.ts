import { Unit1 } from '../../domain';

export class Unit1Dto {
  id: string;
  type: string;
  created_at: number;
  updated_at: number;

  static fromEntity(entity: Unit1): Unit1Dto {
    return {
      id: entity.id,
      type: entity.type,
      created_at: entity.createdAt.getTime(),
      updated_at: entity.updatedAt.getTime(),
    };
  }
}
