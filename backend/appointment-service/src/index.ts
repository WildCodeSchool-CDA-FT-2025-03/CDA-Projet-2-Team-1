import * as dotenv from 'dotenv';

import { ApolloServer } from '@apollo/server';
import ConsultationResolver from './resolvers/consultation.resolver';
import { DoctorResolver } from './resolvers/DoctorResolver';
import PatientResolver from './resolvers/patient.resolver';
import RestResolver from './resolvers/rest.resolver';
import { ServiceResolver } from './resolvers/ServiceResolver';
import UserResolver from './resolvers/user.resolver';
import { buildSchema } from 'type-graphql';
import { dataSource } from './services/client.service';
import logger from './services/logger.service';
import { startStandaloneServer } from '@apollo/server/standalone';

// resolvers

// services

dotenv.config();

const port = process.env.API_PORT ? +process.env.API_PORT : 4000;

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [
      PatientResolver,
      RestResolver,
      UserResolver,
      ConsultationResolver,
      ServiceResolver,
      DoctorResolver,
    ],
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
