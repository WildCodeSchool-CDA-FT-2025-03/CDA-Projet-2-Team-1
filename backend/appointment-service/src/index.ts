import * as dotenv from 'dotenv';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import PatientResolver from './resolvers/patient.resolver';
import UserResolver from './resolvers/user.resolver';
import { dataSource } from './services/client.service';
import logger from './services/logger.service';

// resolvers

// services

dotenv.config();

const port = process.env.PORT ? +process.env.PORT : 4000;

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [UserResolver, PatientResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  logger.info(`Server ready at: ${url}`);
})();
