import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';

import PatientEntity from '../entities/patient.entity';
import CityEntity, { CityInput } from '../entities/city.entity';
import SsnEntity, { SsnInput } from '../entities/ssn.entity';

@InputType()
class PatientInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  birthdate: string;

  @Field()
  gender: string;

  @Field()
  email: string;

  @Field()
  city: CityInput;

  @Field()
  ssn: SsnInput;
}

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

  @Mutation(() => String)
  async addNewPatient(@Arg('patient') patientInput: PatientInput) {
    let city = await CityEntity.findOneBy({ name: 'Belloy' });
    if (city === null) {
      city = new CityEntity();
      city.name = patientInput.city.name;
      city.zip_code = patientInput.city.zip_code;
    }
    let ssn = await SsnEntity.findOneBy({ number: '012345678901234' });
    if (ssn === null) {
      ssn = new SsnEntity();
      ssn.number = patientInput.ssn.number;
    }

    const patient = new PatientEntity();
    patient.firstname = patientInput.firstname;
    patient.lastname = patientInput.lastname;
    patient.gender = patientInput.gender;
    patient.city = city;
    patient.email = patientInput.email;
    patient.birthdate = new Date(patientInput.birthdate);
    patient.ssn = ssn;

    const newPatient = await patient.save();
    return newPatient.id;
  }
}

export default PatientResolver;
