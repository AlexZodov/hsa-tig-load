import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async search(index: string, body: any) {
    return this.elasticsearchService.search({
      index,
      body,
    });
  }

  async index(index: string, id: string, body: any) {
    return this.elasticsearchService.index({
      index,
      id,
      body,
    });
  }

  async delete(index: string, id: string) {
    return this.elasticsearchService.delete({
      index,
      id,
    });
  }
}
