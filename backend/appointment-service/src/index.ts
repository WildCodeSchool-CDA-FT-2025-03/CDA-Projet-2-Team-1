import { ApolloServer } from '@apollo/server';
import { dataSource } from './services/client.service';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import * as dotenv from 'dotenv';
// resolvers
import ConsultationResolver from './resolvers/consultation.resolver';
import NoteSecretResolver from './resolvers/note_secret.resolver';
import PatientResolver from './resolvers/patient.resolver';
import UserResolver from './resolvers/user.resolver';
// services
import logger from './services/logger.service';

dotenv.config();

const port = process.env.API_PORT ? +process.env.API_PORT : 4000;

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [ConsultationResolver, NoteSecretResolver, PatientResolver, UserResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  logger.info(`Server ready at: ${url}`);
})();
