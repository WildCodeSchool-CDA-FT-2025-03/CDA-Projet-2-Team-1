import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
// resolvers
import PatientResolver from './resolvers/patient.resolver';
import UserResolver from './resolvers/user.resolver';
// services
import { dataSource } from './services/client.service';
import logger from './services/logger.service';

dotenv.config();

const port = process.env.API_PORT ? +process.env.API_PORT : 4000;

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
