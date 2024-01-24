import { createClient } from 'redis';
import * as dotenv from 'dotenv';
dotenv.config();

export const redisProvider = [
  {
    provide: 'REDIS_CLIENT',
    useFactory: async () => {
      const client = createClient({
        url: process.env.REDIS,
      });
      await client.connect();
      return client;
    },
  },
];
