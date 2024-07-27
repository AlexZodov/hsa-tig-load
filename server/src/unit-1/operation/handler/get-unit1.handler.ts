import { Injectable } from '@nestjs/common';
import { Unit1 } from '../../domain';
import { Unit1Service } from '../../services';

@Injectable()
export class GetUnit1Handler {
  constructor(private readonly service: Unit1Service) {}

  async handle(unitId: string): Promise<Unit1> {
    return await this.service.getUnitById(unitId);
  }
}
