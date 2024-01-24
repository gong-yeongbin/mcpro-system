import {
  Postback,
  PostbackDaily,
  PostbackEventAdbrixremaster,
  PostbackEventAdjust,
  PostbackEventAirbridge,
  PostbackEventAppsflyer,
  PostbackEventDecotra,
  PostbackEventIve,
  PostbackEventMobiconnect,
  PostbackEventSingular,
  PostbackEventTradingworks,
  PostbackInstallAdbrixremaster,
  PostbackInstallAdjust,
  PostbackInstallAirbridge,
  PostbackInstallAppsflyer,
  PostbackInstallDecotra,
  PostbackInstallIve,
  PostbackInstallMobiconnect,
  PostbackInstallSingular,
  PostbackInstallTradingworks,
  PostbackRegisteredEvent,
  PostbackEventNswitch,
  PostbackInstallNswitch,
} from '../entities/Entity';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdbrixremasterEventConsumer } from './adbrixremasterEvent.consumer';
import { AdbrixremasterInstallConsumer } from './adbrixremasterInstall.consumer';
import { PostbackConsumer } from './postback.consumer';
import { PostbackController } from './postback.controller';
import { PostbackService } from './postback.service';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Postback,
      PostbackRegisteredEvent,
      PostbackDaily,
      PostbackInstallAirbridge,
      PostbackInstallTradingworks,
      PostbackInstallAppsflyer,
      PostbackInstallAdbrixremaster,
      PostbackInstallAdjust,
      PostbackInstallSingular,
      PostbackInstallMobiconnect,
      PostbackInstallIve,
      PostbackInstallDecotra,
      PostbackInstallNswitch,
      PostbackEventAirbridge,
      PostbackEventTradingworks,
      PostbackEventAppsflyer,
      PostbackEventAdbrixremaster,
      PostbackEventAdjust,
      PostbackEventSingular,
      PostbackEventMobiconnect,
      PostbackEventIve,
      PostbackEventDecotra,
      PostbackEventNswitch,
    ]),
    BullModule.registerQueue({
      name: 'postback',
    }),
    BullModule.registerQueue({
      name: 'adbrixremasterEvent',
    }),
    BullModule.registerQueue({
      name: 'adbrixremasterInstall',
    }),
    RedisModule,
  ],
  controllers: [PostbackController],
  providers: [
    PostbackService,
    PostbackConsumer,
    AdbrixremasterEventConsumer,
    AdbrixremasterInstallConsumer,
  ],
})
export class PostbackModule {}
