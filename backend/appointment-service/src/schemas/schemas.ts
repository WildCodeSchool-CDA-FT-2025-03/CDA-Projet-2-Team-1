import { buildSchema } from 'type-graphql';
import ConsultationResolver from '../resolvers/consultation.resolver';
import NoteSecretaryResolver from '../resolvers/note-secretary.resolver';
import PatientResolver from '../resolvers/patient.resolver';
import RestResolver from '../resolvers/rest.resolver';
import RoleResolver from '../resolvers/role.resolver';
import ServiceResolver from '../resolvers/service.resolver';
import UserResolver from '../resolvers/user.resolver';

const getSchema = async () => {
  return await buildSchema({
    resolvers: [
      ConsultationResolver,
      NoteSecretaryResolver,
      PatientResolver,
      RestResolver,
      RoleResolver,
      ServiceResolver,
      UserResolver,
    ],
    validate: true, // Évite des erreurs de validation inutiles
  });
};

export default getSchema;
