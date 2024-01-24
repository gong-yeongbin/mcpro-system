import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign as Campaign1, PostbackDaily } from 'src/entities/Entity';
import { CampaignCacheMiddleware } from 'src/middleware/campaign-cache.middleware';
import { ImpressionCodeCacheMiddleware } from 'src/middleware/impressionCode-cache.middleware';
import { TrackingMiddleware } from 'src/middleware/tracking.middleware';
import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [RedisModule, TypeOrmModule.forFeature([Campaign1, PostbackDaily])],
  controllers: [TrackingController],
  providers: [TrackingService],
})
export class TrackingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TrackingMiddleware).forRoutes(TrackingController);
    consumer.apply(CampaignCacheMiddleware).forRoutes(TrackingController);
    consumer.apply(ImpressionCodeCacheMiddleware).forRoutes(TrackingController);
  }
}
