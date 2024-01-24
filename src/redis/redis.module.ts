import { Module } from '@nestjs/common';
import { redisProvider } from '../redisProvider';

@Module({
  providers: [...redisProvider],
  exports: [...redisProvider],
})
export class RedisModule {}
