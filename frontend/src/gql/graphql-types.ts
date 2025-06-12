import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTimeISO: { input: Date; output: Date };
};

export type CityEntity = {
  __typename?: 'CityEntity';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  patients: Array<PatientEntity>;
  zip_code: Scalars['String']['output'];
};

export type CityInput = {
  name: Scalars['String']['input'];
  zip_code: Scalars['String']['input'];
};

export type ConsultationEntity = {
  __typename?: 'ConsultationEntity';
  additional_notes: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  date_end: Scalars['DateTimeISO']['output'];
  date_start: Scalars['DateTimeISO']['output'];
  doctor: UserEntity;
  id: Scalars['String']['output'];
  patient: PatientEntity;
  reason: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeISO']['output'];
};

export type CreateAvailabilityInput = {
  dayOfWeek: Scalars['Int']['input'];
  doctorId: Scalars['ID']['input'];
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type CreateConsultationInput = {
  additionalNotes: InputMaybe<Scalars['String']['input']>;
  dateEnd: Scalars['String']['input'];
  dateStart: Scalars['String']['input'];
  doctorId: Scalars['ID']['input'];
  patientId: Scalars['ID']['input'];
  reason: InputMaybe<Scalars['String']['input']>;
};

export type CreateDoctorInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  genre: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['ID']['input'];
  specialization: InputMaybe<Scalars['String']['input']>;
};

export type CreateServiceInput = {
  description: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type DoctorAvailabilityEntity = {
  __typename?: 'DoctorAvailabilityEntity';
  createdAt: Scalars['DateTimeISO']['output'];
  dayOfWeek: Scalars['Float']['output'];
  doctor: UserEntity;
  endTime: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  startTime: Scalars['String']['output'];
};

export type DoctorUser = {
  __typename?: 'DoctorUser';
  availabilities: Array<DoctorAvailabilityEntity>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  phone: Maybe<Scalars['String']['output']>;
  service: ServiceEntity;
  specialization: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewPatient: Scalars['String']['output'];
  createAvailability: DoctorAvailabilityEntity;
  createConsultation: ConsultationEntity;
  createDoctor: DoctorUser;
  createRest: RestEntity;
  createService: ServiceEntity;
  deleteAvailability: Scalars['Boolean']['output'];
  deleteDoctor: Scalars['Boolean']['output'];
  deleteService: Scalars['Boolean']['output'];
  updateAvailability: Maybe<DoctorAvailabilityEntity>;
  updateDoctor: Maybe<DoctorUser>;
  updateService: Maybe<ServiceEntity>;
};

export type MutationAddNewPatientArgs = {
  patient: PatientInput;
};

export type MutationCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};

export type MutationCreateConsultationArgs = {
  input: CreateConsultationInput;
};

export type MutationCreateDoctorArgs = {
  input: CreateDoctorInput;
};

export type MutationCreateRestArgs = {
  dateEnd: Scalars['DateTimeISO']['input'];
  dateStart: Scalars['DateTimeISO']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};

export type MutationDeleteAvailabilityArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDoctorArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteServiceArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateAvailabilityArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAvailabilityInput;
};

export type MutationUpdateDoctorArgs = {
  id: Scalars['String']['input'];
  input: UpdateDoctorInput;
};

export type MutationUpdateServiceArgs = {
  id: Scalars['String']['input'];
  input: UpdateServiceInput;
};

export type PatientEntity = {
  __typename?: 'PatientEntity';
  birthdate: Scalars['DateTimeISO']['output'];
  city: CityEntity;
  created_at: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  ssn: SsnEntity;
  updated_at: Scalars['DateTimeISO']['output'];
};

export type PatientInput = {
  birthdate: Scalars['String']['input'];
  city: CityInput;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  ssn: SsnInput;
};

export type Query = {
  __typename?: 'Query';
  activeDoctors: Array<DoctorUser>;
  activeDoctorsByService: Array<DoctorUser>;
  activeServices: Array<ServiceEntity>;
  doctor: Maybe<DoctorUser>;
  doctorAvailabilities: Array<DoctorAvailabilityEntity>;
  doctorAvailabilitiesByDay: Array<DoctorAvailabilityEntity>;
  doctors: Array<DoctorUser>;
  doctorsByService: Array<DoctorUser>;
  getByUserID: Array<RestEntity>;
  getConsultationByDay: Array<ConsultationEntity>;
  getConsultationBySsnForAgent: Array<ConsultationEntity>;
  getConsultationsByDoctorAndDateRange: Array<ConsultationEntity>;
  getRoles: Array<RoleEntity>;
  patient: Maybe<PatientEntity>;
  patients: Array<PatientEntity>;
  searchDoctors: Array<DoctorUser>;
  service: Maybe<ServiceEntity>;
  services: Array<ServiceEntity>;
};

export type QueryActiveDoctorsByServiceArgs = {
  serviceId: Scalars['String']['input'];
};

export type QueryDoctorArgs = {
  id: Scalars['String']['input'];
};

export type QueryDoctorAvailabilitiesArgs = {
  doctorId: Scalars['ID']['input'];
};

export type QueryDoctorAvailabilitiesByDayArgs = {
  dayOfWeek: Scalars['Int']['input'];
  doctorId: Scalars['ID']['input'];
};

export type QueryDoctorsByServiceArgs = {
  serviceId: Scalars['String']['input'];
};

export type QueryGetByUserIdArgs = {
  userId: Scalars['String']['input'];
};

export type QueryGetConsultationByDayArgs = {
  date: Scalars['DateTimeISO']['input'];
};

export type QueryGetConsultationBySsnForAgentArgs = {
  ssn: Scalars['String']['input'];
};

export type QueryGetConsultationsByDoctorAndDateRangeArgs = {
  doctorId: Scalars['String']['input'];
  endDate: Scalars['DateTimeISO']['input'];
  startDate: Scalars['DateTimeISO']['input'];
};

export type QueryPatientArgs = {
  id: Scalars['String']['input'];
};

export type QuerySearchDoctorsArgs = {
  searchTerm: Scalars['String']['input'];
  serviceId: InputMaybe<Scalars['String']['input']>;
};

export type QueryServiceArgs = {
  id: Scalars['String']['input'];
};

export type RestEntity = {
  __typename?: 'RestEntity';
  date_end: Scalars['DateTimeISO']['output'];
  date_start: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  createdAt: Scalars['DateTimeISO']['output'];
  description: Maybe<Scalars['String']['output']>;
  doctors: Array<UserEntity>;
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: Array<UserEntity>;
};

export type SsnEntity = {
  __typename?: 'SsnEntity';
  id: Scalars['String']['output'];
  number: Scalars['String']['output'];
  patient: Array<PatientEntity>;
};

export type SsnInput = {
  number: Scalars['String']['input'];
};

export type UpdateAvailabilityInput = {
  dayOfWeek: InputMaybe<Scalars['Int']['input']>;
  endTime: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  startTime: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDoctorInput = {
  email: InputMaybe<Scalars['String']['input']>;
  firstname: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  lastname: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  serviceId: InputMaybe<Scalars['ID']['input']>;
  specialization: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceInput = {
  description: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  availabilities: Array<DoctorAvailabilityEntity>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  genre: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  phone: Maybe<Scalars['String']['output']>;
  role: Maybe<RoleEntity>;
  service: Maybe<ServiceEntity>;
  specialization: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GetDoctorAvailabilitiesQueryVariables = Exact<{
  doctorId: Scalars['ID']['input'];
}>;

export type GetDoctorAvailabilitiesQuery = {
  __typename?: 'Query';
  doctorAvailabilities: Array<{
    __typename?: 'DoctorAvailabilityEntity';
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isActive: boolean;
    createdAt: Date;
  }>;
};

export type GetDoctorAvailabilitiesByDayQueryVariables = Exact<{
  doctorId: Scalars['ID']['input'];
  dayOfWeek: Scalars['Int']['input'];
}>;

export type GetDoctorAvailabilitiesByDayQuery = {
  __typename?: 'Query';
  doctorAvailabilitiesByDay: Array<{
    __typename?: 'DoctorAvailabilityEntity';
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isActive: boolean;
    createdAt: Date;
  }>;
};

export type CreateAvailabilityMutationVariables = Exact<{
  input: CreateAvailabilityInput;
}>;

export type CreateAvailabilityMutation = {
  __typename?: 'Mutation';
  createAvailability: {
    __typename?: 'DoctorAvailabilityEntity';
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isActive: boolean;
    createdAt: Date;
  };
};

export type UpdateAvailabilityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateAvailabilityInput;
}>;

export type UpdateAvailabilityMutation = {
  __typename?: 'Mutation';
  updateAvailability: {
    __typename?: 'DoctorAvailabilityEntity';
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isActive: boolean;
    createdAt: Date;
  } | null;
};

export type DeleteAvailabilityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteAvailabilityMutation = { __typename?: 'Mutation'; deleteAvailability: boolean };

export type GetConsultationByDayQueryVariables = Exact<{
  date: Scalars['DateTimeISO']['input'];
}>;

export type GetConsultationByDayQuery = {
  __typename?: 'Query';
  getConsultationByDay: Array<{
    __typename?: 'ConsultationEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    reason: string | null;
    additional_notes: string | null;
    created_at: Date;
    updated_at: Date;
    doctor: {
      __typename?: 'UserEntity';
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      specialization: string | null;
      service: { __typename?: 'ServiceEntity'; id: number; name: string } | null;
    };
    patient: {
      __typename?: 'PatientEntity';
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      ssn: { __typename?: 'SsnEntity'; number: string };
    };
  }>;
};

export type GetConsultationBySsnForAgentQueryVariables = Exact<{
  ssn: Scalars['String']['input'];
}>;

export type GetConsultationBySsnForAgentQuery = {
  __typename?: 'Query';
  getConsultationBySsnForAgent: Array<{
    __typename?: 'ConsultationEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    reason: string | null;
    additional_notes: string | null;
    doctor: {
      __typename?: 'UserEntity';
      id: string;
      firstname: string;
      lastname: string;
      specialization: string | null;
      service: { __typename?: 'ServiceEntity'; id: number; name: string } | null;
    };
    patient: {
      __typename?: 'PatientEntity';
      id: string;
      firstname: string;
      lastname: string;
      ssn: { __typename?: 'SsnEntity'; number: string };
    };
  }>;
};

export type GetConsultationsByDoctorAndDateRangeQueryVariables = Exact<{
  doctorId: Scalars['String']['input'];
  startDate: Scalars['DateTimeISO']['input'];
  endDate: Scalars['DateTimeISO']['input'];
}>;

export type GetConsultationsByDoctorAndDateRangeQuery = {
  __typename?: 'Query';
  getConsultationsByDoctorAndDateRange: Array<{
    __typename?: 'ConsultationEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    reason: string | null;
    additional_notes: string | null;
    created_at: Date;
    updated_at: Date;
    patient: {
      __typename?: 'PatientEntity';
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      ssn: { __typename?: 'SsnEntity'; number: string };
    };
  }>;
};

export type CreateConsultationMutationVariables = Exact<{
  input: CreateConsultationInput;
}>;

export type CreateConsultationMutation = {
  __typename?: 'Mutation';
  createConsultation: {
    __typename?: 'ConsultationEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    reason: string | null;
    additional_notes: string | null;
    created_at: Date;
    updated_at: Date;
    doctor: {
      __typename?: 'UserEntity';
      id: string;
      firstname: string;
      lastname: string;
      specialization: string | null;
      service: { __typename?: 'ServiceEntity'; id: number; name: string } | null;
    };
    patient: {
      __typename?: 'PatientEntity';
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      ssn: { __typename?: 'SsnEntity'; number: string };
    };
  };
};

export type GetPatientsBasicQueryVariables = Exact<{ [key: string]: never }>;

export type GetPatientsBasicQuery = {
  __typename?: 'Query';
  patients: Array<{
    __typename?: 'PatientEntity';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    birthdate: Date;
    ssn: { __typename?: 'SsnEntity'; number: string };
    city: { __typename?: 'CityEntity'; name: string; zip_code: string };
  }>;
};

export type GetPatientDetailsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetPatientDetailsQuery = {
  __typename?: 'Query';
  patient: {
    __typename?: 'PatientEntity';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    birthdate: Date;
    created_at: Date;
    updated_at: Date;
    ssn: { __typename?: 'SsnEntity'; id: string; number: string };
    city: { __typename?: 'CityEntity'; id: string; name: string; zip_code: string };
  } | null;
};

export type AddNewPatientMutationVariables = Exact<{
  patient: PatientInput;
}>;

export type AddNewPatientMutation = { __typename?: 'Mutation'; addNewPatient: string };

export type GetByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;

export type GetByUserIdQuery = {
  __typename?: 'Query';
  getByUserID: Array<{
    __typename?: 'RestEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    type: string;
  }>;
};

export type CreateRestMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  dateStart: Scalars['DateTimeISO']['input'];
  dateEnd: Scalars['DateTimeISO']['input'];
  type: Scalars['String']['input'];
}>;

export type CreateRestMutation = {
  __typename?: 'Mutation';
  createRest: {
    __typename?: 'RestEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    type: string;
  };
};

export type GetRolesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRolesQuery = {
  __typename?: 'Query';
  getRoles: Array<{ __typename?: 'RoleEntity'; id: number; name: string }>;
};

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllServicesQuery = {
  __typename?: 'Query';
  services: Array<{
    __typename?: 'ServiceEntity';
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }>;
};

export type GetActiveServicesQueryVariables = Exact<{ [key: string]: never }>;

export type GetActiveServicesQuery = {
  __typename?: 'Query';
  activeServices: Array<{
    __typename?: 'ServiceEntity';
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }>;
};

export type GetServiceQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetServiceQuery = {
  __typename?: 'Query';
  service: {
    __typename?: 'ServiceEntity';
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    doctors: Array<{
      __typename?: 'UserEntity';
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      specialization: string | null;
      isActive: boolean;
    }>;
  } | null;
};

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;

export type CreateServiceMutation = {
  __typename?: 'Mutation';
  createService: {
    __typename?: 'ServiceEntity';
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateServiceInput;
}>;

export type UpdateServiceMutation = {
  __typename?: 'Mutation';
  updateService: {
    __typename?: 'ServiceEntity';
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteServiceMutation = { __typename?: 'Mutation'; deleteService: boolean };

export type GetDoctorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDoctorsQuery = {
  __typename?: 'Query';
  doctors: Array<{
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  }>;
};

export type GetActiveDoctorsByServiceQueryVariables = Exact<{
  serviceId: Scalars['String']['input'];
}>;

export type GetActiveDoctorsByServiceQuery = {
  __typename?: 'Query';
  activeDoctorsByService: Array<{
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  }>;
};

export type GetAllDoctorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllDoctorsQuery = {
  __typename?: 'Query';
  doctors: Array<{
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  }>;
};

export type GetActiveDoctorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetActiveDoctorsQuery = {
  __typename?: 'Query';
  activeDoctors: Array<{
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  }>;
};

export type GetDoctorQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetDoctorQuery = {
  __typename?: 'Query';
  doctor: {
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
    availabilities: Array<{
      __typename?: 'DoctorAvailabilityEntity';
      id: string;
      dayOfWeek: number;
      startTime: string;
      endTime: string;
      isActive: boolean;
    }>;
  } | null;
};

export type SearchDoctorsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  serviceId: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchDoctorsQuery = {
  __typename?: 'Query';
  searchDoctors: Array<{
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  }>;
};

export type CreateDoctorMutationVariables = Exact<{
  input: CreateDoctorInput;
}>;

export type CreateDoctorMutation = {
  __typename?: 'Mutation';
  createDoctor: {
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  };
};

export type UpdateDoctorMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateDoctorInput;
}>;

export type UpdateDoctorMutation = {
  __typename?: 'Mutation';
  updateDoctor: {
    __typename?: 'DoctorUser';
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    specialization: string | null;
    isActive: boolean;
    service: { __typename?: 'ServiceEntity'; id: number; name: string };
  } | null;
};

export type DeleteDoctorMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteDoctorMutation = { __typename?: 'Mutation'; deleteDoctor: boolean };

export const GetDoctorAvailabilitiesDocument = gql`
  query getDoctorAvailabilities($doctorId: ID!) {
    doctorAvailabilities(doctorId: $doctorId) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;

/**
 * __useGetDoctorAvailabilitiesQuery__
 *
 * To run a query within a React component, call `useGetDoctorAvailabilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorAvailabilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorAvailabilitiesQuery({
 *   variables: {
 *      doctorId: // value for 'doctorId'
 *   },
 * });
 */
export function useGetDoctorAvailabilitiesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDoctorAvailabilitiesQuery,
    GetDoctorAvailabilitiesQueryVariables
  > &
    ({ variables: GetDoctorAvailabilitiesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDoctorAvailabilitiesQuery, GetDoctorAvailabilitiesQueryVariables>(
    GetDoctorAvailabilitiesDocument,
    options
  );
}
export function useGetDoctorAvailabilitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDoctorAvailabilitiesQuery,
    GetDoctorAvailabilitiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDoctorAvailabilitiesQuery, GetDoctorAvailabilitiesQueryVariables>(
    GetDoctorAvailabilitiesDocument,
    options
  );
}
export function useGetDoctorAvailabilitiesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetDoctorAvailabilitiesQuery,
        GetDoctorAvailabilitiesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetDoctorAvailabilitiesQuery,
    GetDoctorAvailabilitiesQueryVariables
  >(GetDoctorAvailabilitiesDocument, options);
}
export type GetDoctorAvailabilitiesQueryHookResult = ReturnType<
  typeof useGetDoctorAvailabilitiesQuery
>;
export type GetDoctorAvailabilitiesLazyQueryHookResult = ReturnType<
  typeof useGetDoctorAvailabilitiesLazyQuery
>;
export type GetDoctorAvailabilitiesSuspenseQueryHookResult = ReturnType<
  typeof useGetDoctorAvailabilitiesSuspenseQuery
>;
export type GetDoctorAvailabilitiesQueryResult = Apollo.QueryResult<
  GetDoctorAvailabilitiesQuery,
  GetDoctorAvailabilitiesQueryVariables
>;
export const GetDoctorAvailabilitiesByDayDocument = gql`
  query getDoctorAvailabilitiesByDay($doctorId: ID!, $dayOfWeek: Int!) {
    doctorAvailabilitiesByDay(doctorId: $doctorId, dayOfWeek: $dayOfWeek) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;

/**
 * __useGetDoctorAvailabilitiesByDayQuery__
 *
 * To run a query within a React component, call `useGetDoctorAvailabilitiesByDayQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorAvailabilitiesByDayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorAvailabilitiesByDayQuery({
 *   variables: {
 *      doctorId: // value for 'doctorId'
 *      dayOfWeek: // value for 'dayOfWeek'
 *   },
 * });
 */
export function useGetDoctorAvailabilitiesByDayQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDoctorAvailabilitiesByDayQuery,
    GetDoctorAvailabilitiesByDayQueryVariables
  > &
    ({ variables: GetDoctorAvailabilitiesByDayQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDoctorAvailabilitiesByDayQuery,
    GetDoctorAvailabilitiesByDayQueryVariables
  >(GetDoctorAvailabilitiesByDayDocument, options);
}
export function useGetDoctorAvailabilitiesByDayLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDoctorAvailabilitiesByDayQuery,
    GetDoctorAvailabilitiesByDayQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDoctorAvailabilitiesByDayQuery,
    GetDoctorAvailabilitiesByDayQueryVariables
  >(GetDoctorAvailabilitiesByDayDocument, options);
}
export function useGetDoctorAvailabilitiesByDaySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetDoctorAvailabilitiesByDayQuery,
        GetDoctorAvailabilitiesByDayQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetDoctorAvailabilitiesByDayQuery,
    GetDoctorAvailabilitiesByDayQueryVariables
  >(GetDoctorAvailabilitiesByDayDocument, options);
}
export type GetDoctorAvailabilitiesByDayQueryHookResult = ReturnType<
  typeof useGetDoctorAvailabilitiesByDayQuery
>;
export type GetDoctorAvailabilitiesByDayLazyQueryHookResult = ReturnType<
  typeof useGetDoctorAvailabilitiesByDayLazyQuery
>;
export type GetDoctorAvailabilitiesByDaySuspenseQueryHookResult = ReturnType<
  typeof useGetDoctorAvailabilitiesByDaySuspenseQuery
>;
export type GetDoctorAvailabilitiesByDayQueryResult = Apollo.QueryResult<
  GetDoctorAvailabilitiesByDayQuery,
  GetDoctorAvailabilitiesByDayQueryVariables
>;
export const CreateAvailabilityDocument = gql`
  mutation createAvailability($input: CreateAvailabilityInput!) {
    createAvailability(input: $input) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;
export type CreateAvailabilityMutationFn = Apollo.MutationFunction<
  CreateAvailabilityMutation,
  CreateAvailabilityMutationVariables
>;

/**
 * __useCreateAvailabilityMutation__
 *
 * To run a mutation, you first call `useCreateAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAvailabilityMutation, { data, loading, error }] = useCreateAvailabilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAvailabilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAvailabilityMutation,
    CreateAvailabilityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAvailabilityMutation, CreateAvailabilityMutationVariables>(
    CreateAvailabilityDocument,
    options
  );
}
export type CreateAvailabilityMutationHookResult = ReturnType<typeof useCreateAvailabilityMutation>;
export type CreateAvailabilityMutationResult = Apollo.MutationResult<CreateAvailabilityMutation>;
export type CreateAvailabilityMutationOptions = Apollo.BaseMutationOptions<
  CreateAvailabilityMutation,
  CreateAvailabilityMutationVariables
>;
export const UpdateAvailabilityDocument = gql`
  mutation updateAvailability($id: ID!, $input: UpdateAvailabilityInput!) {
    updateAvailability(id: $id, input: $input) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;
export type UpdateAvailabilityMutationFn = Apollo.MutationFunction<
  UpdateAvailabilityMutation,
  UpdateAvailabilityMutationVariables
>;

/**
 * __useUpdateAvailabilityMutation__
 *
 * To run a mutation, you first call `useUpdateAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvailabilityMutation, { data, loading, error }] = useUpdateAvailabilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAvailabilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAvailabilityMutation,
    UpdateAvailabilityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAvailabilityMutation, UpdateAvailabilityMutationVariables>(
    UpdateAvailabilityDocument,
    options
  );
}
export type UpdateAvailabilityMutationHookResult = ReturnType<typeof useUpdateAvailabilityMutation>;
export type UpdateAvailabilityMutationResult = Apollo.MutationResult<UpdateAvailabilityMutation>;
export type UpdateAvailabilityMutationOptions = Apollo.BaseMutationOptions<
  UpdateAvailabilityMutation,
  UpdateAvailabilityMutationVariables
>;
export const DeleteAvailabilityDocument = gql`
  mutation deleteAvailability($id: ID!) {
    deleteAvailability(id: $id)
  }
`;
export type DeleteAvailabilityMutationFn = Apollo.MutationFunction<
  DeleteAvailabilityMutation,
  DeleteAvailabilityMutationVariables
>;

/**
 * __useDeleteAvailabilityMutation__
 *
 * To run a mutation, you first call `useDeleteAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAvailabilityMutation, { data, loading, error }] = useDeleteAvailabilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAvailabilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAvailabilityMutation,
    DeleteAvailabilityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteAvailabilityMutation, DeleteAvailabilityMutationVariables>(
    DeleteAvailabilityDocument,
    options
  );
}
export type DeleteAvailabilityMutationHookResult = ReturnType<typeof useDeleteAvailabilityMutation>;
export type DeleteAvailabilityMutationResult = Apollo.MutationResult<DeleteAvailabilityMutation>;
export type DeleteAvailabilityMutationOptions = Apollo.BaseMutationOptions<
  DeleteAvailabilityMutation,
  DeleteAvailabilityMutationVariables
>;
export const GetConsultationByDayDocument = gql`
  query getConsultationByDay($date: DateTimeISO!) {
    getConsultationByDay(date: $date) {
      id
      date_start
      date_end
      reason
      additional_notes
      created_at
      updated_at
      doctor {
        id
        firstname
        lastname
        email
        specialization
        service {
          id
          name
        }
      }
      patient {
        id
        firstname
        lastname
        email
        ssn {
          number
        }
      }
    }
  }
`;

/**
 * __useGetConsultationByDayQuery__
 *
 * To run a query within a React component, call `useGetConsultationByDayQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultationByDayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultationByDayQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetConsultationByDayQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetConsultationByDayQuery,
    GetConsultationByDayQueryVariables
  > &
    ({ variables: GetConsultationByDayQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetConsultationByDayQuery, GetConsultationByDayQueryVariables>(
    GetConsultationByDayDocument,
    options
  );
}
export function useGetConsultationByDayLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConsultationByDayQuery,
    GetConsultationByDayQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetConsultationByDayQuery, GetConsultationByDayQueryVariables>(
    GetConsultationByDayDocument,
    options
  );
}
export function useGetConsultationByDaySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetConsultationByDayQuery, GetConsultationByDayQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetConsultationByDayQuery, GetConsultationByDayQueryVariables>(
    GetConsultationByDayDocument,
    options
  );
}
export type GetConsultationByDayQueryHookResult = ReturnType<typeof useGetConsultationByDayQuery>;
export type GetConsultationByDayLazyQueryHookResult = ReturnType<
  typeof useGetConsultationByDayLazyQuery
>;
export type GetConsultationByDaySuspenseQueryHookResult = ReturnType<
  typeof useGetConsultationByDaySuspenseQuery
>;
export type GetConsultationByDayQueryResult = Apollo.QueryResult<
  GetConsultationByDayQuery,
  GetConsultationByDayQueryVariables
>;
export const GetConsultationBySsnForAgentDocument = gql`
  query getConsultationBySsnForAgent($ssn: String!) {
    getConsultationBySsnForAgent(ssn: $ssn) {
      id
      date_start
      date_end
      reason
      additional_notes
      doctor {
        id
        firstname
        lastname
        specialization
        service {
          id
          name
        }
      }
      patient {
        id
        firstname
        lastname
        ssn {
          number
        }
      }
    }
  }
`;

/**
 * __useGetConsultationBySsnForAgentQuery__
 *
 * To run a query within a React component, call `useGetConsultationBySsnForAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultationBySsnForAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultationBySsnForAgentQuery({
 *   variables: {
 *      ssn: // value for 'ssn'
 *   },
 * });
 */
export function useGetConsultationBySsnForAgentQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetConsultationBySsnForAgentQuery,
    GetConsultationBySsnForAgentQueryVariables
  > &
    ({ variables: GetConsultationBySsnForAgentQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetConsultationBySsnForAgentQuery,
    GetConsultationBySsnForAgentQueryVariables
  >(GetConsultationBySsnForAgentDocument, options);
}
export function useGetConsultationBySsnForAgentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConsultationBySsnForAgentQuery,
    GetConsultationBySsnForAgentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetConsultationBySsnForAgentQuery,
    GetConsultationBySsnForAgentQueryVariables
  >(GetConsultationBySsnForAgentDocument, options);
}
export function useGetConsultationBySsnForAgentSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetConsultationBySsnForAgentQuery,
        GetConsultationBySsnForAgentQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetConsultationBySsnForAgentQuery,
    GetConsultationBySsnForAgentQueryVariables
  >(GetConsultationBySsnForAgentDocument, options);
}
export type GetConsultationBySsnForAgentQueryHookResult = ReturnType<
  typeof useGetConsultationBySsnForAgentQuery
>;
export type GetConsultationBySsnForAgentLazyQueryHookResult = ReturnType<
  typeof useGetConsultationBySsnForAgentLazyQuery
>;
export type GetConsultationBySsnForAgentSuspenseQueryHookResult = ReturnType<
  typeof useGetConsultationBySsnForAgentSuspenseQuery
>;
export type GetConsultationBySsnForAgentQueryResult = Apollo.QueryResult<
  GetConsultationBySsnForAgentQuery,
  GetConsultationBySsnForAgentQueryVariables
>;
export const GetConsultationsByDoctorAndDateRangeDocument = gql`
  query getConsultationsByDoctorAndDateRange(
    $doctorId: String!
    $startDate: DateTimeISO!
    $endDate: DateTimeISO!
  ) {
    getConsultationsByDoctorAndDateRange(
      doctorId: $doctorId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      date_start
      date_end
      reason
      additional_notes
      created_at
      updated_at
      patient {
        id
        firstname
        lastname
        email
        ssn {
          number
        }
      }
    }
  }
`;

/**
 * __useGetConsultationsByDoctorAndDateRangeQuery__
 *
 * To run a query within a React component, call `useGetConsultationsByDoctorAndDateRangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultationsByDoctorAndDateRangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultationsByDoctorAndDateRangeQuery({
 *   variables: {
 *      doctorId: // value for 'doctorId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetConsultationsByDoctorAndDateRangeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetConsultationsByDoctorAndDateRangeQuery,
    GetConsultationsByDoctorAndDateRangeQueryVariables
  > &
    (
      | { variables: GetConsultationsByDoctorAndDateRangeQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetConsultationsByDoctorAndDateRangeQuery,
    GetConsultationsByDoctorAndDateRangeQueryVariables
  >(GetConsultationsByDoctorAndDateRangeDocument, options);
}
export function useGetConsultationsByDoctorAndDateRangeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConsultationsByDoctorAndDateRangeQuery,
    GetConsultationsByDoctorAndDateRangeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetConsultationsByDoctorAndDateRangeQuery,
    GetConsultationsByDoctorAndDateRangeQueryVariables
  >(GetConsultationsByDoctorAndDateRangeDocument, options);
}
export function useGetConsultationsByDoctorAndDateRangeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetConsultationsByDoctorAndDateRangeQuery,
        GetConsultationsByDoctorAndDateRangeQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetConsultationsByDoctorAndDateRangeQuery,
    GetConsultationsByDoctorAndDateRangeQueryVariables
  >(GetConsultationsByDoctorAndDateRangeDocument, options);
}
export type GetConsultationsByDoctorAndDateRangeQueryHookResult = ReturnType<
  typeof useGetConsultationsByDoctorAndDateRangeQuery
>;
export type GetConsultationsByDoctorAndDateRangeLazyQueryHookResult = ReturnType<
  typeof useGetConsultationsByDoctorAndDateRangeLazyQuery
>;
export type GetConsultationsByDoctorAndDateRangeSuspenseQueryHookResult = ReturnType<
  typeof useGetConsultationsByDoctorAndDateRangeSuspenseQuery
>;
export type GetConsultationsByDoctorAndDateRangeQueryResult = Apollo.QueryResult<
  GetConsultationsByDoctorAndDateRangeQuery,
  GetConsultationsByDoctorAndDateRangeQueryVariables
>;
export const CreateConsultationDocument = gql`
  mutation createConsultation($input: CreateConsultationInput!) {
    createConsultation(input: $input) {
      id
      date_start
      date_end
      reason
      additional_notes
      created_at
      updated_at
      doctor {
        id
        firstname
        lastname
        specialization
        service {
          id
          name
        }
      }
      patient {
        id
        firstname
        lastname
        email
        ssn {
          number
        }
      }
    }
  }
`;
export type CreateConsultationMutationFn = Apollo.MutationFunction<
  CreateConsultationMutation,
  CreateConsultationMutationVariables
>;

/**
 * __useCreateConsultationMutation__
 *
 * To run a mutation, you first call `useCreateConsultationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsultationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsultationMutation, { data, loading, error }] = useCreateConsultationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsultationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateConsultationMutation,
    CreateConsultationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateConsultationMutation, CreateConsultationMutationVariables>(
    CreateConsultationDocument,
    options
  );
}
export type CreateConsultationMutationHookResult = ReturnType<typeof useCreateConsultationMutation>;
export type CreateConsultationMutationResult = Apollo.MutationResult<CreateConsultationMutation>;
export type CreateConsultationMutationOptions = Apollo.BaseMutationOptions<
  CreateConsultationMutation,
  CreateConsultationMutationVariables
>;
export const GetPatientsBasicDocument = gql`
  query getPatientsBasic {
    patients {
      id
      firstname
      lastname
      email
      gender
      birthdate
      ssn {
        number
      }
      city {
        name
        zip_code
      }
    }
  }
`;

/**
 * __useGetPatientsBasicQuery__
 *
 * To run a query within a React component, call `useGetPatientsBasicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientsBasicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientsBasicQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPatientsBasicQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPatientsBasicQuery, GetPatientsBasicQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPatientsBasicQuery, GetPatientsBasicQueryVariables>(
    GetPatientsBasicDocument,
    options
  );
}
export function useGetPatientsBasicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPatientsBasicQuery, GetPatientsBasicQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPatientsBasicQuery, GetPatientsBasicQueryVariables>(
    GetPatientsBasicDocument,
    options
  );
}
export function useGetPatientsBasicSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPatientsBasicQuery, GetPatientsBasicQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPatientsBasicQuery, GetPatientsBasicQueryVariables>(
    GetPatientsBasicDocument,
    options
  );
}
export type GetPatientsBasicQueryHookResult = ReturnType<typeof useGetPatientsBasicQuery>;
export type GetPatientsBasicLazyQueryHookResult = ReturnType<typeof useGetPatientsBasicLazyQuery>;
export type GetPatientsBasicSuspenseQueryHookResult = ReturnType<
  typeof useGetPatientsBasicSuspenseQuery
>;
export type GetPatientsBasicQueryResult = Apollo.QueryResult<
  GetPatientsBasicQuery,
  GetPatientsBasicQueryVariables
>;
export const GetPatientDetailsDocument = gql`
  query getPatientDetails($id: String!) {
    patient(id: $id) {
      id
      firstname
      lastname
      email
      gender
      birthdate
      created_at
      updated_at
      ssn {
        id
        number
      }
      city {
        id
        name
        zip_code
      }
    }
  }
`;

/**
 * __useGetPatientDetailsQuery__
 *
 * To run a query within a React component, call `useGetPatientDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPatientDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<GetPatientDetailsQuery, GetPatientDetailsQueryVariables> &
    ({ variables: GetPatientDetailsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPatientDetailsQuery, GetPatientDetailsQueryVariables>(
    GetPatientDetailsDocument,
    options
  );
}
export function useGetPatientDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPatientDetailsQuery, GetPatientDetailsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPatientDetailsQuery, GetPatientDetailsQueryVariables>(
    GetPatientDetailsDocument,
    options
  );
}
export function useGetPatientDetailsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPatientDetailsQuery, GetPatientDetailsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPatientDetailsQuery, GetPatientDetailsQueryVariables>(
    GetPatientDetailsDocument,
    options
  );
}
export type GetPatientDetailsQueryHookResult = ReturnType<typeof useGetPatientDetailsQuery>;
export type GetPatientDetailsLazyQueryHookResult = ReturnType<typeof useGetPatientDetailsLazyQuery>;
export type GetPatientDetailsSuspenseQueryHookResult = ReturnType<
  typeof useGetPatientDetailsSuspenseQuery
>;
export type GetPatientDetailsQueryResult = Apollo.QueryResult<
  GetPatientDetailsQuery,
  GetPatientDetailsQueryVariables
>;
export const AddNewPatientDocument = gql`
  mutation addNewPatient($patient: PatientInput!) {
    addNewPatient(patient: $patient)
  }
`;
export type AddNewPatientMutationFn = Apollo.MutationFunction<
  AddNewPatientMutation,
  AddNewPatientMutationVariables
>;

/**
 * __useAddNewPatientMutation__
 *
 * To run a mutation, you first call `useAddNewPatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewPatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewPatientMutation, { data, loading, error }] = useAddNewPatientMutation({
 *   variables: {
 *      patient: // value for 'patient'
 *   },
 * });
 */
export function useAddNewPatientMutation(
  baseOptions?: Apollo.MutationHookOptions<AddNewPatientMutation, AddNewPatientMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddNewPatientMutation, AddNewPatientMutationVariables>(
    AddNewPatientDocument,
    options
  );
}
export type AddNewPatientMutationHookResult = ReturnType<typeof useAddNewPatientMutation>;
export type AddNewPatientMutationResult = Apollo.MutationResult<AddNewPatientMutation>;
export type AddNewPatientMutationOptions = Apollo.BaseMutationOptions<
  AddNewPatientMutation,
  AddNewPatientMutationVariables
>;
export const GetByUserIdDocument = gql`
  query getByUserId($userId: String!) {
    getByUserID(userId: $userId) {
      id
      date_start
      date_end
      type
    }
  }
`;

/**
 * __useGetByUserIdQuery__
 *
 * To run a query within a React component, call `useGetByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetByUserIdQuery, GetByUserIdQueryVariables> &
    ({ variables: GetByUserIdQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetByUserIdQuery, GetByUserIdQueryVariables>(GetByUserIdDocument, options);
}
export function useGetByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetByUserIdQuery, GetByUserIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetByUserIdQuery, GetByUserIdQueryVariables>(
    GetByUserIdDocument,
    options
  );
}
export function useGetByUserIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetByUserIdQuery, GetByUserIdQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetByUserIdQuery, GetByUserIdQueryVariables>(
    GetByUserIdDocument,
    options
  );
}
export type GetByUserIdQueryHookResult = ReturnType<typeof useGetByUserIdQuery>;
export type GetByUserIdLazyQueryHookResult = ReturnType<typeof useGetByUserIdLazyQuery>;
export type GetByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetByUserIdSuspenseQuery>;
export type GetByUserIdQueryResult = Apollo.QueryResult<
  GetByUserIdQuery,
  GetByUserIdQueryVariables
>;
export const CreateRestDocument = gql`
  mutation createRest(
    $userId: String!
    $dateStart: DateTimeISO!
    $dateEnd: DateTimeISO!
    $type: String!
  ) {
    createRest(userId: $userId, dateStart: $dateStart, dateEnd: $dateEnd, type: $type) {
      id
      date_start
      date_end
      type
    }
  }
`;
export type CreateRestMutationFn = Apollo.MutationFunction<
  CreateRestMutation,
  CreateRestMutationVariables
>;

/**
 * __useCreateRestMutation__
 *
 * To run a mutation, you first call `useCreateRestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestMutation, { data, loading, error }] = useCreateRestMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      dateStart: // value for 'dateStart'
 *      dateEnd: // value for 'dateEnd'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateRestMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateRestMutation, CreateRestMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateRestMutation, CreateRestMutationVariables>(
    CreateRestDocument,
    options
  );
}
export type CreateRestMutationHookResult = ReturnType<typeof useCreateRestMutation>;
export type CreateRestMutationResult = Apollo.MutationResult<CreateRestMutation>;
export type CreateRestMutationOptions = Apollo.BaseMutationOptions<
  CreateRestMutation,
  CreateRestMutationVariables
>;
export const GetRolesDocument = gql`
  query getRoles {
    getRoles {
      id
      name
    }
  }
`;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
}
export function useGetRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
}
export function useGetRolesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
}
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesSuspenseQueryHookResult = ReturnType<typeof useGetRolesSuspenseQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const GetAllServicesDocument = gql`
  query getAllServices {
    services {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetAllServicesQuery__
 *
 * To run a query within a React component, call `useGetAllServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(
    GetAllServicesDocument,
    options
  );
}
export function useGetAllServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(
    GetAllServicesDocument,
    options
  );
}
export function useGetAllServicesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(
    GetAllServicesDocument,
    options
  );
}
export type GetAllServicesQueryHookResult = ReturnType<typeof useGetAllServicesQuery>;
export type GetAllServicesLazyQueryHookResult = ReturnType<typeof useGetAllServicesLazyQuery>;
export type GetAllServicesSuspenseQueryHookResult = ReturnType<
  typeof useGetAllServicesSuspenseQuery
>;
export type GetAllServicesQueryResult = Apollo.QueryResult<
  GetAllServicesQuery,
  GetAllServicesQueryVariables
>;
export const GetActiveServicesDocument = gql`
  query getActiveServices {
    activeServices {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetActiveServicesQuery__
 *
 * To run a query within a React component, call `useGetActiveServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetActiveServicesQuery, GetActiveServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetActiveServicesQuery, GetActiveServicesQueryVariables>(
    GetActiveServicesDocument,
    options
  );
}
export function useGetActiveServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetActiveServicesQuery, GetActiveServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetActiveServicesQuery, GetActiveServicesQueryVariables>(
    GetActiveServicesDocument,
    options
  );
}
export function useGetActiveServicesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetActiveServicesQuery, GetActiveServicesQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetActiveServicesQuery, GetActiveServicesQueryVariables>(
    GetActiveServicesDocument,
    options
  );
}
export type GetActiveServicesQueryHookResult = ReturnType<typeof useGetActiveServicesQuery>;
export type GetActiveServicesLazyQueryHookResult = ReturnType<typeof useGetActiveServicesLazyQuery>;
export type GetActiveServicesSuspenseQueryHookResult = ReturnType<
  typeof useGetActiveServicesSuspenseQuery
>;
export type GetActiveServicesQueryResult = Apollo.QueryResult<
  GetActiveServicesQuery,
  GetActiveServicesQueryVariables
>;
export const GetServiceDocument = gql`
  query getService($id: String!) {
    service(id: $id) {
      id
      name
      description
      isActive
      createdAt
      updatedAt
      doctors {
        id
        firstname
        lastname
        email
        specialization
        isActive
      }
    }
  }
`;

/**
 * __useGetServiceQuery__
 *
 * To run a query within a React component, call `useGetServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetServiceQuery(
  baseOptions: Apollo.QueryHookOptions<GetServiceQuery, GetServiceQueryVariables> &
    ({ variables: GetServiceQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetServiceQuery, GetServiceQueryVariables>(GetServiceDocument, options);
}
export function useGetServiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetServiceQuery, GetServiceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetServiceQuery, GetServiceQueryVariables>(
    GetServiceDocument,
    options
  );
}
export function useGetServiceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetServiceQuery, GetServiceQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetServiceQuery, GetServiceQueryVariables>(
    GetServiceDocument,
    options
  );
}
export type GetServiceQueryHookResult = ReturnType<typeof useGetServiceQuery>;
export type GetServiceLazyQueryHookResult = ReturnType<typeof useGetServiceLazyQuery>;
export type GetServiceSuspenseQueryHookResult = ReturnType<typeof useGetServiceSuspenseQuery>;
export type GetServiceQueryResult = Apollo.QueryResult<GetServiceQuery, GetServiceQueryVariables>;
export const CreateServiceDocument = gql`
  mutation createService($input: CreateServiceInput!) {
    createService(input: $input) {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;
export type CreateServiceMutationFn = Apollo.MutationFunction<
  CreateServiceMutation,
  CreateServiceMutationVariables
>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(
    CreateServiceDocument,
    options
  );
}
export type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export type CreateServiceMutationResult = Apollo.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = Apollo.BaseMutationOptions<
  CreateServiceMutation,
  CreateServiceMutationVariables
>;
export const UpdateServiceDocument = gql`
  mutation updateService($id: String!, $input: UpdateServiceInput!) {
    updateService(id: $id, input: $input) {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;
export type UpdateServiceMutationFn = Apollo.MutationFunction<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(
    UpdateServiceDocument,
    options
  );
}
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;
export const DeleteServiceDocument = gql`
  mutation deleteService($id: String!) {
    deleteService(id: $id)
  }
`;
export type DeleteServiceMutationFn = Apollo.MutationFunction<
  DeleteServiceMutation,
  DeleteServiceMutationVariables
>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(
    DeleteServiceDocument,
    options
  );
}
export type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export type DeleteServiceMutationResult = Apollo.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = Apollo.BaseMutationOptions<
  DeleteServiceMutation,
  DeleteServiceMutationVariables
>;
export const GetDoctorsDocument = gql`
  query getDoctors {
    doctors {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;

/**
 * __useGetDoctorsQuery__
 *
 * To run a query within a React component, call `useGetDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDoctorsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, options);
}
export function useGetDoctorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(
    GetDoctorsDocument,
    options
  );
}
export function useGetDoctorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(
    GetDoctorsDocument,
    options
  );
}
export type GetDoctorsQueryHookResult = ReturnType<typeof useGetDoctorsQuery>;
export type GetDoctorsLazyQueryHookResult = ReturnType<typeof useGetDoctorsLazyQuery>;
export type GetDoctorsSuspenseQueryHookResult = ReturnType<typeof useGetDoctorsSuspenseQuery>;
export type GetDoctorsQueryResult = Apollo.QueryResult<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetActiveDoctorsByServiceDocument = gql`
  query getActiveDoctorsByService($serviceId: String!) {
    activeDoctorsByService(serviceId: $serviceId) {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;

/**
 * __useGetActiveDoctorsByServiceQuery__
 *
 * To run a query within a React component, call `useGetActiveDoctorsByServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveDoctorsByServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveDoctorsByServiceQuery({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useGetActiveDoctorsByServiceQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetActiveDoctorsByServiceQuery,
    GetActiveDoctorsByServiceQueryVariables
  > &
    ({ variables: GetActiveDoctorsByServiceQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetActiveDoctorsByServiceQuery, GetActiveDoctorsByServiceQueryVariables>(
    GetActiveDoctorsByServiceDocument,
    options
  );
}
export function useGetActiveDoctorsByServiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetActiveDoctorsByServiceQuery,
    GetActiveDoctorsByServiceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetActiveDoctorsByServiceQuery,
    GetActiveDoctorsByServiceQueryVariables
  >(GetActiveDoctorsByServiceDocument, options);
}
export function useGetActiveDoctorsByServiceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetActiveDoctorsByServiceQuery,
        GetActiveDoctorsByServiceQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetActiveDoctorsByServiceQuery,
    GetActiveDoctorsByServiceQueryVariables
  >(GetActiveDoctorsByServiceDocument, options);
}
export type GetActiveDoctorsByServiceQueryHookResult = ReturnType<
  typeof useGetActiveDoctorsByServiceQuery
>;
export type GetActiveDoctorsByServiceLazyQueryHookResult = ReturnType<
  typeof useGetActiveDoctorsByServiceLazyQuery
>;
export type GetActiveDoctorsByServiceSuspenseQueryHookResult = ReturnType<
  typeof useGetActiveDoctorsByServiceSuspenseQuery
>;
export type GetActiveDoctorsByServiceQueryResult = Apollo.QueryResult<
  GetActiveDoctorsByServiceQuery,
  GetActiveDoctorsByServiceQueryVariables
>;
export const GetAllDoctorsDocument = gql`
  query getAllDoctors {
    doctors {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;

/**
 * __useGetAllDoctorsQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDoctorsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>(
    GetAllDoctorsDocument,
    options
  );
}
export function useGetAllDoctorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>(
    GetAllDoctorsDocument,
    options
  );
}
export function useGetAllDoctorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>(
    GetAllDoctorsDocument,
    options
  );
}
export type GetAllDoctorsQueryHookResult = ReturnType<typeof useGetAllDoctorsQuery>;
export type GetAllDoctorsLazyQueryHookResult = ReturnType<typeof useGetAllDoctorsLazyQuery>;
export type GetAllDoctorsSuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorsSuspenseQuery>;
export type GetAllDoctorsQueryResult = Apollo.QueryResult<
  GetAllDoctorsQuery,
  GetAllDoctorsQueryVariables
>;
export const GetActiveDoctorsDocument = gql`
  query getActiveDoctors {
    activeDoctors {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;

/**
 * __useGetActiveDoctorsQuery__
 *
 * To run a query within a React component, call `useGetActiveDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveDoctorsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetActiveDoctorsQuery, GetActiveDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetActiveDoctorsQuery, GetActiveDoctorsQueryVariables>(
    GetActiveDoctorsDocument,
    options
  );
}
export function useGetActiveDoctorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetActiveDoctorsQuery, GetActiveDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetActiveDoctorsQuery, GetActiveDoctorsQueryVariables>(
    GetActiveDoctorsDocument,
    options
  );
}
export function useGetActiveDoctorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetActiveDoctorsQuery, GetActiveDoctorsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetActiveDoctorsQuery, GetActiveDoctorsQueryVariables>(
    GetActiveDoctorsDocument,
    options
  );
}
export type GetActiveDoctorsQueryHookResult = ReturnType<typeof useGetActiveDoctorsQuery>;
export type GetActiveDoctorsLazyQueryHookResult = ReturnType<typeof useGetActiveDoctorsLazyQuery>;
export type GetActiveDoctorsSuspenseQueryHookResult = ReturnType<
  typeof useGetActiveDoctorsSuspenseQuery
>;
export type GetActiveDoctorsQueryResult = Apollo.QueryResult<
  GetActiveDoctorsQuery,
  GetActiveDoctorsQueryVariables
>;
export const GetDoctorDocument = gql`
  query getDoctor($id: String!) {
    doctor(id: $id) {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
      availabilities {
        id
        dayOfWeek
        startTime
        endTime
        isActive
      }
    }
  }
`;

/**
 * __useGetDoctorQuery__
 *
 * To run a query within a React component, call `useGetDoctorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDoctorQuery(
  baseOptions: Apollo.QueryHookOptions<GetDoctorQuery, GetDoctorQueryVariables> &
    ({ variables: GetDoctorQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDoctorQuery, GetDoctorQueryVariables>(GetDoctorDocument, options);
}
export function useGetDoctorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorQuery, GetDoctorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDoctorQuery, GetDoctorQueryVariables>(GetDoctorDocument, options);
}
export function useGetDoctorSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetDoctorQuery, GetDoctorQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDoctorQuery, GetDoctorQueryVariables>(
    GetDoctorDocument,
    options
  );
}
export type GetDoctorQueryHookResult = ReturnType<typeof useGetDoctorQuery>;
export type GetDoctorLazyQueryHookResult = ReturnType<typeof useGetDoctorLazyQuery>;
export type GetDoctorSuspenseQueryHookResult = ReturnType<typeof useGetDoctorSuspenseQuery>;
export type GetDoctorQueryResult = Apollo.QueryResult<GetDoctorQuery, GetDoctorQueryVariables>;
export const SearchDoctorsDocument = gql`
  query searchDoctors($searchTerm: String!, $serviceId: String) {
    searchDoctors(searchTerm: $searchTerm, serviceId: $serviceId) {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;

/**
 * __useSearchDoctorsQuery__
 *
 * To run a query within a React component, call `useSearchDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchDoctorsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useSearchDoctorsQuery(
  baseOptions: Apollo.QueryHookOptions<SearchDoctorsQuery, SearchDoctorsQueryVariables> &
    ({ variables: SearchDoctorsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchDoctorsQuery, SearchDoctorsQueryVariables>(
    SearchDoctorsDocument,
    options
  );
}
export function useSearchDoctorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchDoctorsQuery, SearchDoctorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchDoctorsQuery, SearchDoctorsQueryVariables>(
    SearchDoctorsDocument,
    options
  );
}
export function useSearchDoctorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<SearchDoctorsQuery, SearchDoctorsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<SearchDoctorsQuery, SearchDoctorsQueryVariables>(
    SearchDoctorsDocument,
    options
  );
}
export type SearchDoctorsQueryHookResult = ReturnType<typeof useSearchDoctorsQuery>;
export type SearchDoctorsLazyQueryHookResult = ReturnType<typeof useSearchDoctorsLazyQuery>;
export type SearchDoctorsSuspenseQueryHookResult = ReturnType<typeof useSearchDoctorsSuspenseQuery>;
export type SearchDoctorsQueryResult = Apollo.QueryResult<
  SearchDoctorsQuery,
  SearchDoctorsQueryVariables
>;
export const CreateDoctorDocument = gql`
  mutation createDoctor($input: CreateDoctorInput!) {
    createDoctor(input: $input) {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;
export type CreateDoctorMutationFn = Apollo.MutationFunction<
  CreateDoctorMutation,
  CreateDoctorMutationVariables
>;

/**
 * __useCreateDoctorMutation__
 *
 * To run a mutation, you first call `useCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorMutation, { data, loading, error }] = useCreateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDoctorMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateDoctorMutation, CreateDoctorMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateDoctorMutation, CreateDoctorMutationVariables>(
    CreateDoctorDocument,
    options
  );
}
export type CreateDoctorMutationHookResult = ReturnType<typeof useCreateDoctorMutation>;
export type CreateDoctorMutationResult = Apollo.MutationResult<CreateDoctorMutation>;
export type CreateDoctorMutationOptions = Apollo.BaseMutationOptions<
  CreateDoctorMutation,
  CreateDoctorMutationVariables
>;
export const UpdateDoctorDocument = gql`
  mutation updateDoctor($id: String!, $input: UpdateDoctorInput!) {
    updateDoctor(id: $id, input: $input) {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;
export type UpdateDoctorMutationFn = Apollo.MutationFunction<
  UpdateDoctorMutation,
  UpdateDoctorMutationVariables
>;

/**
 * __useUpdateDoctorMutation__
 *
 * To run a mutation, you first call `useUpdateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDoctorMutation, { data, loading, error }] = useUpdateDoctorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDoctorMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateDoctorMutation, UpdateDoctorMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateDoctorMutation, UpdateDoctorMutationVariables>(
    UpdateDoctorDocument,
    options
  );
}
export type UpdateDoctorMutationHookResult = ReturnType<typeof useUpdateDoctorMutation>;
export type UpdateDoctorMutationResult = Apollo.MutationResult<UpdateDoctorMutation>;
export type UpdateDoctorMutationOptions = Apollo.BaseMutationOptions<
  UpdateDoctorMutation,
  UpdateDoctorMutationVariables
>;
export const DeleteDoctorDocument = gql`
  mutation deleteDoctor($id: String!) {
    deleteDoctor(id: $id)
  }
`;
export type DeleteDoctorMutationFn = Apollo.MutationFunction<
  DeleteDoctorMutation,
  DeleteDoctorMutationVariables
>;

/**
 * __useDeleteDoctorMutation__
 *
 * To run a mutation, you first call `useDeleteDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDoctorMutation, { data, loading, error }] = useDeleteDoctorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDoctorMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteDoctorMutation, DeleteDoctorMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteDoctorMutation, DeleteDoctorMutationVariables>(
    DeleteDoctorDocument,
    options
  );
}
export type DeleteDoctorMutationHookResult = ReturnType<typeof useDeleteDoctorMutation>;
export type DeleteDoctorMutationResult = Apollo.MutationResult<DeleteDoctorMutation>;
export type DeleteDoctorMutationOptions = Apollo.BaseMutationOptions<
  DeleteDoctorMutation,
  DeleteDoctorMutationVariables
>;
