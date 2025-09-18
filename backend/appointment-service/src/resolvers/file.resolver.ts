import { Resolver, Query, Args, Mutation, UseMiddleware } from 'type-graphql';
import ConsultationEntity from '../entities/consultation.entity';
import FileEntity, { GetFilesByConsultationIdArgs, UploadFileArgs } from '../entities/file.entity';
import { AuthMiddleware, AuthRoleMiddleware } from '../middlewares/auth.middleware';

@Resolver(FileEntity)
class FileResolver {
  @Query(() => [FileEntity])
  async getFilesByConsultationId(
    @Args() { consultationId }: GetFilesByConsultationIdArgs
  ): Promise<FileEntity[]> {
    const consultation = await ConsultationEntity.findOne({
      where: { id: consultationId },
    });

    if (!consultation) {
      throw new Error('Consultation not found');
    }

    return FileEntity.find({ where: { consultation } });
  }

  @UseMiddleware(AuthMiddleware, AuthRoleMiddleware([2, 3]))
  @Mutation(() => FileEntity)
  async uploadFile(
    @Args() { consultationId, name, path, isConfidential }: UploadFileArgs
  ): Promise<FileEntity> {
    const consultation = await ConsultationEntity.findOne({
      where: { id: consultationId },
    });

    if (!consultation) {
      throw new Error('Consultation not found');
    }

    // Créer le fichier
    const fileEntity = FileEntity.create({
      name,
      path,
      is_confidential: isConfidential || false,
      is_deleted: false,
      created_at: new Date(),
      consultation,
    });

    return await fileEntity.save();
  }
}

export default FileResolver;
