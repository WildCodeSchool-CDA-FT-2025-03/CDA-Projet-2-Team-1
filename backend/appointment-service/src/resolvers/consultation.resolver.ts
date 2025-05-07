import { Arg, Query, Resolver } from 'type-graphql';
import ConsultationEntity from '../entities/consultation.entity';

@Resolver(ConsultationEntity)
class ConsultationResolver {
  @Query(() => [ConsultationEntity])
  async getAllConsultations(): Promise<ConsultationEntity[]> {
    return ConsultationEntity.find();
  }

  @Query(() => ConsultationEntity)
  async getOneConsultation(@Arg('id') id: string): Promise<ConsultationEntity> {
    const consultation = await ConsultationEntity.findOne({ where: { id } });
    if (!consultation) {
      throw new Error('Consultation not found');
    }
    return consultation;
  }
}

export default ConsultationResolver;
