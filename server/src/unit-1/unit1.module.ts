import { Module } from '@nestjs/common';
import { Unit1ServicesModule } from './services';
import {
  CreateUnit1Handler,
  GetUnit1Handler,
  UpdateUnit1Handler,
} from './operation';
import { Unit1Controller } from './ui';

const handlers = [CreateUnit1Handler, GetUnit1Handler, UpdateUnit1Handler];
@Module({
  imports: [Unit1ServicesModule],
  controllers: [Unit1Controller],
  providers: [...handlers],
})
export class Unit1Module {}
