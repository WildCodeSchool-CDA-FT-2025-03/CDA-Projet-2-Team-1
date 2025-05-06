import { ApolloServer } from '@apollo/server';
import { dataSource } from './services/client.service';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import * as dotenv from 'dotenv';
import PatientResolver from './resolvers/patient.resolver';
import logger from './services/logger.service';

dotenv.config();

const port = process.env.API_PORT ? +process.env.API_PORT : 4000;

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [PatientResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  logger.info(`Server ready at: ${url}`);
})();
