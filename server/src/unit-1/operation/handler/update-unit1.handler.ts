import { Injectable } from '@nestjs/common';
import { Unit1 } from '../../domain';
import { Unit1Service } from '../../services';
import { UpdateUnit1Request } from '../request';

@Injectable()
export class UpdateUnit1Handler {
  constructor(private readonly service: Unit1Service) {}

  async handle(request: UpdateUnit1Request): Promise<Unit1> {
    return this.service.update({
      id: request.unitId,
      type: request.type,
    });
  }
}
