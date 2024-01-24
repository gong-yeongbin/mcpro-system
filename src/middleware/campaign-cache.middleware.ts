import {
  Inject,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { NextFunction } from 'express';
import { Campaign } from '../entities/Entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedisClientType } from 'redis';

@Injectable()
export class CampaignCacheMiddleware implements NestMiddleware {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async use(request: any, response: any, next: NextFunction): Promise<void> {
    const token: string = request.query.token;

    let trackerTrackingUrl = await this.redis.hGet(token, 'trackerTrackingUrl');

    if (!trackerTrackingUrl) {
      const campaignEntity: Campaign = await this.campaignRepository.findOne({
        where: {
          token: token,
          block: false,
        },
      });

      if (!campaignEntity) throw new NotFoundException();

      trackerTrackingUrl = campaignEntity.trackerTrackingUrl;

      await this.redis.hSet(token, 'trackerTrackingUrl', trackerTrackingUrl);
      await this.redis.expire(token, 60 * 15);
    }

    next();
  }
}
