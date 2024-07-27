import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit1, Unit1Model, Unit1Schema } from '../domain';
import { Unit1MongooseRepository, Unit1Repository } from '../services';
import { MongooseUnit1Repository, TypeormUnit1Repository } from './repository';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forFeature([Unit1]),
    MongooseModule.forFeature([{ name: Unit1Model.name, schema: Unit1Schema }]),
  ],
  providers: [
    {
      provide: Unit1Repository,
      useClass: TypeormUnit1Repository,
    },
    {
      provide: Unit1MongooseRepository,
      useClass: MongooseUnit1Repository,
    },
  ],
  exports: [Unit1Repository, Unit1MongooseRepository],
})
export class InfrastructureModule {}
