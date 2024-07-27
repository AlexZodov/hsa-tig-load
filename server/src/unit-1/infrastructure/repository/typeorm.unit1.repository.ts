import { Unit1Repository } from '../../services';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unit1 } from '../../domain';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormUnit1Repository implements Unit1Repository {
  constructor(
    @InjectRepository(Unit1) private readonly repository: Repository<Unit1>,
  ) {}

  async delete(unit: Unit1): Promise<void> {
    await this.repository.remove(unit);
  }

  async findOne(id: string): Promise<Unit1 | undefined> {
    return await this.repository.findOneBy({ id: id });
  }

  async save(unit: Unit1): Promise<Unit1> {
    return await this.repository.save(unit);
  }
}
