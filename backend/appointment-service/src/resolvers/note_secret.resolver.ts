import { Query, Resolver } from 'type-graphql';
import NoteSecretEntity from '../entities/note_secret.entity';

@Resolver(NoteSecretEntity)
class NoteSecretResolver {
  @Query(() => [NoteSecretEntity])
  async getAllNotesSecrets(): Promise<NoteSecretEntity[]> {
    return NoteSecretEntity.find();
  }
}

export default NoteSecretResolver;
