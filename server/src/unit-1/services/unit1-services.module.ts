import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure';
import { Unit1Service } from './unit1.service';
import { MyElasticsearchModule } from '../../common/elastic';

@Module({
  imports: [InfrastructureModule, MyElasticsearchModule],
  providers: [Unit1Service],
  exports: [Unit1Service],
})
export class Unit1ServicesModule {}
