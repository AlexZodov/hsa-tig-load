import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import * as process from 'process';

dotenvExpand.expand(config());

@Injectable()
export class ConfigService {
  appProject = 'nest_skeleton_service';
  server = {
    port: Number(process.env.PORT) || 3000,
  };

  database = {
    url: process.env.DATABASE_URL,
    replicas: process.env.DATABASE_REPLICA_URLS?.split(','),
  };

  databaseMongo = {
    url: process.env.MONGO_DATABASE_URL,
  };

  elasticsearch = {
    url: process.env.ELASTICSEARCH_URL,
  };

  isProduction() {
    return process.env.NODE_ENV === 'production';
  }
}
