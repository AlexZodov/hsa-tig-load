import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUnit1Dto, Unit1Dto, UpdateUnit1Dto } from '../dto';
import {
  CreateUnit1Handler,
  GetUnit1Handler,
  UpdateUnit1Handler,
  UpdateUnit1Request,
} from '../../operation';
import * as uuid from 'uuid';

@Controller('/unit-1')
export class Unit1Controller {
  constructor(
    private readonly createUnit1Handler: CreateUnit1Handler,
    private readonly updateUnit1Handler: UpdateUnit1Handler,
    private readonly getUnit1Handler: GetUnit1Handler,
  ) {}

  @Post('/random')
  async createRandomUnit1(): Promise<Unit1Dto> {
    const unit1 = await this.createUnit1Handler.handle({
      unitId: uuid.v4(),
      type: 'test',
    });

    return Unit1Dto.fromEntity(unit1);
  }

  @Post('/')
  async createUnit1(@Body() dto: CreateUnit1Dto): Promise<Unit1Dto> {
    const unit1 = await this.createUnit1Handler.handle({
      unitId: dto.unit1_id,
      type: dto.type,
    });

    return Unit1Dto.fromEntity(unit1);
  }

  @Get(':id')
  async getUnit1ById(@Param('id') id: string): Promise<Unit1Dto> {
    const unit1 = await this.getUnit1Handler.handle(id);

    return Unit1Dto.fromEntity(unit1);
  }

  @Put('/:id')
  async updateUnit1(
    @Param('id') id: string,
    @Body() dto: UpdateUnit1Dto,
  ): Promise<Unit1Dto> {
    const request = <UpdateUnit1Request>{ unitId: id, type: dto.type };
    const unit1 = await this.updateUnit1Handler.handle(request);

    return Unit1Dto.fromEntity(unit1);
  }
}
