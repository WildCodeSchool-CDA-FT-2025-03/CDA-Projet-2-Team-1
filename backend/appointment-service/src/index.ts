import { ApolloServer } from '@apollo/server';
import { dataSource } from './services/client';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import * as dotenv from 'dotenv';
import PatientResolver from './resolvers/patient.resolver';

dotenv.config();

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [PatientResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at: ${url}`);
})();
