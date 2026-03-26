import { createClient, RedisClientType } from 'redis';

const globalForRedis = globalThis as unknown as { redis: RedisClientType };

export const redisClient =
  globalForRedis.redis ||
  createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  });

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redisClient;

// Inicializa a conexão
if (!redisClient.isOpen) {
  redisClient.connect().catch(console.error);
}
