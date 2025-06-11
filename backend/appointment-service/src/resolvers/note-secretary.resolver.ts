import { Arg, Query, Resolver } from 'type-graphql';
import NoteSecretaryEntity from '../entities/note-secretary.entity';

@Resolver(NoteSecretaryEntity)
class NoteSecretaryResolver {
  @Query(() => [NoteSecretaryEntity])
  async getNoteSecretaryByConsultationId(
    @Arg('consultationId', () => String) consultationId: string
  ): Promise<NoteSecretaryEntity[]> {
    return NoteSecretaryEntity.find({ where: { consultation: { id: consultationId } } });
  }
}

export default NoteSecretaryResolver;
