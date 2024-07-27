import { Injectable } from '@nestjs/common';
import { Unit1Service } from '../../services';
import { CreateUnit1Request } from '../request';
import { Unit1 } from '../../domain';

@Injectable()
export class CreateUnit1Handler {
  constructor(private readonly service: Unit1Service) {}

  async handle(request: CreateUnit1Request): Promise<Unit1> {
    return this.service.create({
      id: request.unitId,
      type: request.type,
    });
  }
}
