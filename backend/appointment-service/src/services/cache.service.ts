import { createClient } from 'redis';
import 'dotenv/config';

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

export default redisClient;
