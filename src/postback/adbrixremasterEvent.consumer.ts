import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostbackEventAdbrixremaster } from '../entities/Entity';
import { Inject } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Processor('adbrixremasterEvent')
export class AdbrixremasterEventConsumer {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
    @InjectRepository(PostbackEventAdbrixremaster)
    private readonly postbackEventAdbrixremasterRepository: Repository<PostbackEventAdbrixremaster>,
  ) {}

  @Process()
  async eventHandler(job: Job) {
    const postbackEventAdbrixremaster: PostbackEventAdbrixremaster = job.data;
    try {
      if (
        postbackEventAdbrixremaster.paramJson != 'null' &&
        postbackEventAdbrixremaster.paramJson != '' &&
        postbackEventAdbrixremaster.paramJson != null
      ) {
        const jsonData: any = JSON.parse(postbackEventAdbrixremaster.paramJson);

        if (jsonData['abx:item.abx:sales']) {
          postbackEventAdbrixremaster.revenue = +jsonData['abx:item.abx:sales'];
          postbackEventAdbrixremaster.currency =
            jsonData['abx:item.abx:currency'];
        } else if (jsonData['abx:items']) {
          for (const item of jsonData['abx:items']) {
            postbackEventAdbrixremaster.revenue += +item['abx:sales']
              ? +item['abx:sales']
              : 0;
            postbackEventAdbrixremaster.currency = item['abx:currency'];
          }
        }
      }

      let cursor: number;
      cursor = 0;

      do {
        const scanData: {
          cursor: number;
          tuples: Array<{ field: string; value: string }>;
        } = await this.redis.hScan('view_code', cursor, {
          MATCH: `${postbackEventAdbrixremaster.token}/*`,
          COUNT: 10000,
        });

        cursor = +scanData.cursor;
        const data: Array<{ field: string; value: string }> = scanData.tuples;

        for (let index = 0; index < data.length; index++) {
          if (
            index % 2 &&
            data[index].value == postbackEventAdbrixremaster.viewCode
          ) {
            postbackEventAdbrixremaster.pubId =
              data[index - 1].field.split('/')[1];
            postbackEventAdbrixremaster.subId =
              data[index - 1].field.split('/')[2];
            cursor = 0;
          }
        }
      } while (cursor != 0);

      await this.postbackEventAdbrixremasterRepository.save(
        postbackEventAdbrixremaster,
      );
    } catch (error) {
      console.log('error : ', error);
    }
  }
}
