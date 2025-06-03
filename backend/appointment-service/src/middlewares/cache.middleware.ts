import { MiddlewareFn } from 'type-graphql';
import redisClient from '../services/cache.service';
import { generateQueryKey } from '../utils/graphql.utils';

export function CacheMiddleware(timeout: number): MiddlewareFn {
  return async ({ info, args }, next) => {
    const key = generateQueryKey(info, args);
    const data = await redisClient.get(key);
    if (data) {
      return JSON.parse(data);
    } else {
      const result = await next();
      await redisClient.set(key, JSON.stringify(result));
      await redisClient.expire(key, timeout);
      return result;
    }
  };
}
