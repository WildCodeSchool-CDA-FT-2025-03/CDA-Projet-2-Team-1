import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { startStandaloneServer } from '@apollo/server/standalone';
// resolvers
import PatientResolver from './resolvers/patient.resolver';
import RestResolver from './resolvers/rest.resolver';
import UserResolver from './resolvers/user.resolver';
// services
import { dataSource } from './services/client.service';
import logger from './services/logger.service';
import ConsultationResolver from './resolvers/consultation.resolver';
import redisClient from './services/cache.service';
import 'dotenv/config';

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

  const schema = await buildSchema({
    resolvers: [PatientResolver, RestResolver, UserResolver, ConsultationResolver],
    validate: true, // Évite des erreurs de validation inutiles
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  logger.info(`Server ready at: ${url}`);
})();
