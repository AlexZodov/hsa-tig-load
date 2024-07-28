import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from './config';
import { DatabaseModule } from './common/database';
import { Unit1Module } from './unit-1/unit1.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MyElasticsearchModule } from './common/elastic';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        typeorm: {
          type: 'postgres',
          replication: {
            master: { url: configService.database.url },
            slaves: configService.database.replicas.map((url) => ({ url })),
          },
        },
      }),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: function (appConfigService: ConfigService) {
        return {
          uri: appConfigService.databaseMongo.url,
        };
      },
    }),
    MyElasticsearchModule,
    Unit1Module,
  ],
})
export class AppModule {}
