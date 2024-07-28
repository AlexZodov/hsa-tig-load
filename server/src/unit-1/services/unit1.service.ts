import { Injectable } from '@nestjs/common';
import { Unit1, Unit1Document, Unit1NotFoundError } from '../domain';
import { Unit1MongooseRepository, Unit1Repository } from './interfaces';
import { SearchService } from '../../common/elastic';

type CreateUnit1Options = {
  id: string;
  type: string;
};

type UpdateUnit1Options = CreateUnit1Options;

@Injectable()
export class Unit1Service {
  constructor(
    private readonly repository: Unit1Repository,
    private readonly mongooseRepository: Unit1MongooseRepository,
    private readonly searchService: SearchService,
  ) {}

  async create(options: CreateUnit1Options): Promise<Unit1> {
    let unit1 = new Unit1();

    unit1.id = options.id;
    unit1.type = options.type;

    await this.mongooseRepository.create({
      id: options.id,
      type: options.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    unit1 = await this.repository.save(unit1);

    await this.searchService.index('unit-1', unit1.id, unit1);

    return unit1;
  }

  async update(options: UpdateUnit1Options): Promise<Unit1> {
    const fetchedUnit = await this.getUnitByIdOrNull(options.id);
    const fetchedUnitMongoose = await this.getMongooseUnitByIdOrNull(
      options.id,
    );
    let unit;
    let unitMongoose;
    if (fetchedUnit) {
      if (options.type) {
        fetchedUnit.type = options.type;
      }
      unit = await this.repository.save(fetchedUnit);
    } else {
      unit = await this.create({
        id: options.id,
        type: options?.type ?? 'type-1',
      });
    }

    if (fetchedUnitMongoose) {
      if (options.type) {
        fetchedUnitMongoose.type = options.type;
        fetchedUnitMongoose.updatedAt = new Date();
      }
      unitMongoose = await this.mongooseRepository.update(fetchedUnitMongoose);
    } else {
      unitMongoose = await this.mongooseRepository.create({
        id: options.id,
        type: options.type,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return unit;
  }

  async getUnitById(id: string): Promise<Unit1> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new Unit1NotFoundError(id);
    }

    return user;
  }

  async getUnitByIdOrNull(id: string): Promise<Unit1 | undefined> {
    return await this.repository.findOne(id);
  }

  async getMongooseUnitByIdOrNull(
    id: string,
  ): Promise<Unit1Document | undefined> {
    return await this.mongooseRepository.findOne(id);
  }

  async deleteUnitById(id: string): Promise<void> {
    const unit = await this.getUnitById(id);

    await this.repository.delete(unit);
  }
}
