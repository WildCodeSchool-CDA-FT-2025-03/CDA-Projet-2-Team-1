import { Arg, Query, Resolver } from 'type-graphql';

import PatientEntity from '../entities/patient.entity';

@Resolver(PatientEntity)
class PatientResolver {
  @Query(() => [PatientEntity])
  patients(): Promise<PatientEntity[]> {
    return PatientEntity.find({ relations: ['ssn', 'city'] });
  }

  @Query(() => PatientEntity, { nullable: true })
  patient(@Arg('id') id: string): Promise<PatientEntity | null> {
    return PatientEntity.findOne({
      where: { id },
      relations: ['ssn', 'city'],
    });
  }
}

export default PatientResolver;
