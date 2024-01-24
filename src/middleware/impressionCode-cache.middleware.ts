import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Redis } from 'ioredis';
import { v4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { PostbackDaily } from '../entities/Entity';
import { Repository } from 'typeorm';
import { RedisClientType } from 'redis';

@Injectable()
export class ImpressionCodeCacheMiddleware implements NestMiddleware {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
    @InjectRepository(PostbackDaily)
    private readonly postbackDailyRepository: Repository<PostbackDaily>,
  ) {}

  async use(request: any, response: any, next: NextFunction): Promise<void> {
    const token: string = request.query.token;
    const pub_id: string = request.query.pub_id;
    const sub_id: string = request.query.sub_id;

    const isValidation: string = await this.redis.get(
      `${token}:${pub_id}:${sub_id}`,
    );
    isValidation
      ? isValidation
      : await this.redis.set(
          `${token}:${pub_id}:${sub_id}`,
          v4().replace(/-/g, ''),
        );

    await this.redis.expire(`${token}:${pub_id}:${sub_id}`, 60 * 60 * 24 * 2);

    await this.redis.hSet(
      'view_code',
      `${token}/${pub_id}/${sub_id}`,
      await this.redis.get(`${token}:${pub_id}:${sub_id}`),
    );

    next();
  }
}
