import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// resolvers
// services
import { dataSource } from './services/client.service';
import logger from './services/logger.service';
import redisClient from './services/cache.service';
import 'dotenv/config';
import getSchema from './schemas/schemas';

const port = process.env.API_PORT ? +process.env.API_PORT : 4000;

(async () => {
  await dataSource.initialize();

  try {
    await redisClient.connect();
    logger.info(`Redis cache is ready`);
  } catch (err) {
    logger.error('Failed to init redis');
    logger.error(err);
  }

  const schema = await getSchema();

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  logger.info(`Server ready at: ${url}`);
})();
