import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Redis } from 'ioredis';
import { PostbackInstallAdbrixremaster } from '../entities/Entity';
import { Inject } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Processor('adbrixremasterInstall')
export class AdbrixremasterInstallConsumer {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
    @InjectRepository(PostbackInstallAdbrixremaster)
    private readonly postbackInstallAdbrixremasterRepository: Repository<PostbackInstallAdbrixremaster>,
  ) {}

  @Process()
  async installHandler(job: Job) {
    const postbackInstallAdbrixremaster: PostbackInstallAdbrixremaster =
      job.data;

    try {
      let cursor: number;
      cursor = 0;

      do {
        const scanData: {
          cursor: number;
          tuples: Array<{ field: string; value: string }>;
        } = await this.redis.hScan('view_code', cursor, {
          MATCH: `${postbackInstallAdbrixremaster.token}/*`,
          COUNT: 10000,
        });

        cursor = +scanData.cursor;
        const data: Array<{ field: string; value: string }> = scanData.tuples;

        for (let index = 0; index < data.length; index++) {
          if (
            index % 2 &&
            data[index].value == postbackInstallAdbrixremaster.viewCode
          ) {
            postbackInstallAdbrixremaster.pubId =
              data[index - 1].field.split('/')[1];
            postbackInstallAdbrixremaster.subId =
              data[index - 1].field.split('/')[2];
            cursor = 0;
          }
        }
      } while (cursor != 0);

      await this.postbackInstallAdbrixremasterRepository.save(
        postbackInstallAdbrixremaster,
      );
    } catch (error) {}
  }
}
