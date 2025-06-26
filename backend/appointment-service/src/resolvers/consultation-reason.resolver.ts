import { Query, Resolver } from 'type-graphql';

import { ConsultationReason } from '../entities/consultation-reason.entity';
import { ConsultationReasonSchema } from '../schemas/consultation-reason.schema';

@Resolver(() => ConsultationReason)
export default class ConsultationReasonResolver {
  @Query(() => [ConsultationReasonSchema])
  async getConsultationReasons(): Promise<ConsultationReason[]> {
    return ConsultationReason.find();
  }
}
