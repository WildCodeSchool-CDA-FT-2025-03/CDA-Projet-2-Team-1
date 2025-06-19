import { Resolver, Query, Arg } from 'type-graphql';
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
}

export default FileResolver;
