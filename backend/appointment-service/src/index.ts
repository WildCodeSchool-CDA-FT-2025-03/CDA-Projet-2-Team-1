import * as dotenv from 'dotenv';

import { ApolloServer } from '@apollo/server';
import PatientResolver from './resolvers/patient.resolver';
import UserResolver from './resolvers/user.resolver';
import { buildSchema } from 'type-graphql';
import { dataSource } from './services/client.service';
import logger from './services/logger.service';
import { startStandaloneServer } from '@apollo/server/standalone';

// resolvers

// services

dotenv.config();

const port = process.env.PORT ? +process.env.PORT : 4000;

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [UserResolver, PatientResolver],
    validate: false, // Évite des erreurs de validation inutiles
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  logger.info(`Server ready at: ${url}`);
})();
