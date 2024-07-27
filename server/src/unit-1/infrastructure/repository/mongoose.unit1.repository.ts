import { SaveUnit1Options, Unit1MongooseRepository } from '../../services';
import { Injectable } from '@nestjs/common';
import { Unit1Document, Unit1Model } from '../../domain';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongooseUnit1Repository implements Unit1MongooseRepository {
  constructor(
    @InjectModel(Unit1Model.name) private readonly model: Model<Unit1Document>,
  ) {}

  async delete(unit: Unit1Document): Promise<void> {
    await unit.remove();
  }

  async findOne(id: string): Promise<Unit1Document | undefined> {
    return this.model.findOne({ id: id });
  }

  async create(unit: SaveUnit1Options): Promise<Unit1Document> {
    const model = new this.model(unit);
    await model.save();

    return model;
  }

  async update(unit: Unit1Document): Promise<Unit1Document> {
    await unit.save();

    return unit;
  }
}
