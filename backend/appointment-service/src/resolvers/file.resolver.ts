import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import ConsultationEntity from '../entities/consultation.entity';
import FileEntity from '../entities/file.entity';

@Resolver(FileEntity)
class FileResolver {
  @Query(() => [FileEntity])
  async getFilesByConsultationId(
    @Arg('consultationId', () => String) consultationId: string
  ): Promise<FileEntity[]> {
    const consultation = await ConsultationEntity.findOne({ where: { id: consultationId } });
    if (!consultation) {
      throw new Error('Consultation not found');
    }
    return FileEntity.find({ where: { consultation } });
  }

  @Mutation(() => FileEntity)
  async uploadFile(
    @Arg('consultationId', () => String) consultationId: string,
    @Arg('name', () => String) name: string,
    @Arg('path', () => String) path: string,
    @Arg('isConfidential', () => Boolean, { defaultValue: false }) isConfidential: boolean = false
  ): Promise<FileEntity> {
    // Récupérer la consultation
    const consultation = await ConsultationEntity.findOne({ where: { id: consultationId } });
    if (!consultation) {
      throw new Error('Consultation not found');
    }

    // Créer le fichier
    const fileEntity = FileEntity.create({
      name,
      path,
      is_confidential: isConfidential,
      is_deleted: false,
      created_at: new Date(),
      consultation,
    });

    return await fileEntity.save();
  }
}

export default FileResolver;
