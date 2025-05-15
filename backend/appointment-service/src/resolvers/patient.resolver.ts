import { Query, Resolver } from 'type-graphql';

import PatientEntity from '../entities/patient.entity';

@Resolver(PatientEntity)
class PatientResolver {
  @Query(() => [PatientEntity])
  async getPatients(): Promise<PatientEntity[]> {
    return PatientEntity.find();
  }
}

export default PatientResolver;
