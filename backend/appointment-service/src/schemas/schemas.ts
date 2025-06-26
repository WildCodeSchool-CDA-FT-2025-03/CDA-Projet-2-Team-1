import ConsultationReasonResolver from '../resolvers/consultation-reason.resolver';
import ConsultationResolver from '../resolvers/consultation.resolver';
import FileResolver from '../resolvers/file.resolver';
import NoteSecretaryResolver from '../resolvers/note-secretary.resolver';
import PatientResolver from '../resolvers/patient.resolver';
import RestResolver from '../resolvers/rest.resolver';
import RoleResolver from '../resolvers/role.resolver';
import ServiceResolver from '../resolvers/service.resolver';
import UserResolver from '../resolvers/user.resolver';
import { buildSchema } from 'type-graphql';

const getSchema = async () => {
  return await buildSchema({
    resolvers: [
      ConsultationResolver,
      FileResolver,
      NoteSecretaryResolver,
      PatientResolver,
      RestResolver,
      RoleResolver,
      ServiceResolver,
      UserResolver,
      ConsultationReasonResolver,
    ],
    validate: true, // Évite des erreurs de validation inutiles
  });
};

export default getSchema;
