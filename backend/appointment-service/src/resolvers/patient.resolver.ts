import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { IsEmail, IsDateString, IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import PatientEntity from '../entities/patient.entity';
import CityEntity, { CityInput } from '../entities/city.entity';
import SsnEntity, { SsnInput } from '../entities/ssn.entity';
import Gender from '../types/gender';

@InputType()
class PatientInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsNotEmpty()
  firstname: string;

  @Field()
  @IsNotEmpty()
  lastname: string;

  @Field()
  @IsDateString()
  birthdate: string;

  @Field()
  @IsEnum(Gender)
  gender: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Type(() => CityInput)
  @ValidateNested()
  city: CityInput;

  @Field()
  @Type(() => SsnInput)
  @ValidateNested()
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
    let city = await CityEntity.findOneBy({ name: patientInput.city.name });
    if (city === null) {
      city = new CityEntity();
      city.name = patientInput.city.name;
      city.zip_code = patientInput.city.zip_code;
    }

    let ssn = await SsnEntity.findOneBy({ number: patientInput.ssn.number });
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

  @Mutation(() => PatientEntity)
  async updatePatient(@Arg('data') data: PatientInput): Promise<PatientEntity> {
    const patient = await PatientEntity.findOne({
      where: { id: data.id },
      relations: ['ssn', 'city'],
    });

    if (!patient) {
      throw new Error('Patient inexistant');
    }

    // Recherche ou création de la ville
    let city = await CityEntity.findOneBy({ name: data.city.name });
    if (!city) {
      city = new CityEntity();
      city.name = data.city.name;
      city.zip_code = data.city.zip_code;
      await city.save();
    }

    // Recherche ou création du SSN
    let ssn = await SsnEntity.findOneBy({ number: data.ssn.number });
    if (!ssn) {
      ssn = new SsnEntity();
      ssn.number = data.ssn.number;
      await ssn.save();
    }

    // On crée un clone à partir du patient existant
    const updatePatient = {
      ...patient, // On garde les champs existants
      ...data, // On écrase uniquement les champs envoyés dans la requête
      city,
      ssn,
    };

    // Mise à jour du patient
    const updatedPatient = await PatientEntity.save({
      id: updatePatient.id, // obligatoire pour que ce soit un UPDATE
      firstname: updatePatient.firstname,
      lastname: updatePatient.lastname,
      birthdate: new Date(updatePatient.birthdate),
      gender: updatePatient.gender,
      email: updatePatient.email,
      city: updatePatient.city,
      ssn: updatePatient.ssn,
    });

    return updatedPatient;
  }
}

export default PatientResolver;
