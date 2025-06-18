import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import NoteSecretaryEntity from '../entities/note-secretary.entity';
import ConsultationEntity from '../entities/consultation.entity';

@Resolver(NoteSecretaryEntity)
class NoteSecretaryResolver {
  @Query(() => [NoteSecretaryEntity])
  async getNoteSecretaryByConsultationId(
    @Arg('consultationId', () => String) consultationId: string
  ): Promise<NoteSecretaryEntity[]> {
    return NoteSecretaryEntity.find({ where: { consultation: { id: consultationId } } });
  }

  @Mutation(() => NoteSecretaryEntity)
  async createNoteSecretary(
    @Arg('text', () => String) text: string,
    @Arg('consultationId', () => String) consultationId: string
  ): Promise<NoteSecretaryEntity> {
    // Vérifier que la consultation existe
    const consultation = await ConsultationEntity.findOne({ where: { id: consultationId } });
    if (!consultation) {
      throw new Error('Consultation not found');
    }

    // Vérifier qu'il n'y a pas déjà une note pour cette consultation
    const existingNote = await NoteSecretaryEntity.findOne({
      where: { consultation: { id: consultationId } },
    });
    if (existingNote) {
      throw new Error('A note already exists for this consultation');
    }

    const note = NoteSecretaryEntity.create({
      text,
      consultation,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return note.save();
  }
}

export default NoteSecretaryResolver;
