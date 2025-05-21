import { Query, Resolver } from 'type-graphql';

import PatientEntity from '../entities/patient.entity';

@Resolver(PatientEntity)
class PatientResolver {
  @Query(() => [PatientEntity])
  patients(): Promise<PatientEntity[]> {
    return PatientEntity.find({ relations: ['ssn'] });
  }
}

export default PatientResolver;
