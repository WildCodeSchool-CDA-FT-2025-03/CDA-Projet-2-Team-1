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

export type GetConsultationByDayQueryVariables = Exact<{
  date: Scalars['DateTimeISO']['input'];
}>;

export type GetConsultationByDayQuery = {
  __typename?: 'Query';
  getConsultationByDay: Array<{
    __typename?: 'ConsultationEntity';
    date_end: Date;
    date_start: Date;
    id: string;
    doctor: {
      __typename?: 'UserEntity';
      id: string;
      lastname: string;
      service: { __typename?: 'ServiceEntity'; name: string } | null;
    };
    patient: {
      __typename?: 'PatientEntity';
      firstname: string;
      id: string;
      lastname: string;
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
    date_start: Date;
    id: string;
    doctor: {
      __typename?: 'UserEntity';
      lastname: string;
      service: { __typename?: 'ServiceEntity'; name: string } | null;
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
    ssn: { __typename?: 'SsnEntity'; number: string };
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
    birthdate: Date;
    gender: string;
    email: string;
    ssn: { __typename?: 'SsnEntity'; number: string };
    city: { __typename?: 'CityEntity'; name: string; zip_code: string };
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
    date_end: Date;
    date_start: Date;
    id: string;
    type: string;
  }>;
};

export type CreateRestMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  dateStart: Scalars['DateTimeISO']['input'];
  dateEnd: Scalars['DateTimeISO']['input'];
}>;

export type CreateRestMutation = {
  __typename?: 'Mutation';
  createRest: {
    __typename?: 'RestEntity';
    id: string;
    type: string;
    date_start: Date;
    date_end: Date;
  };
};

export type GetRolesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRolesQuery = {
  __typename?: 'Query';
  getRoles: Array<{ __typename?: 'RoleEntity'; id: number; name: string }>;
};

export type GetServicesQueryVariables = Exact<{ [key: string]: never }>;

export type GetServicesQuery = {
  __typename?: 'Query';
  services: Array<{ __typename?: 'ServiceEntity'; id: number; name: string }>;
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
export const GetConsultationByDayDocument = gql`
  query getConsultationByDay($date: DateTimeISO!) {
    getConsultationByDay(date: $date) {
      date_end
      date_start
      id
      doctor {
        id
        lastname
        service {
          name
        }
      }
      patient {
        firstname
        id
        lastname
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
      date_start
      id
      doctor {
        lastname
        service {
          name
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
  query GetPatientsBasic {
    patients {
      id
      firstname
      lastname
      ssn {
        number
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
  query GetPatientDetails($id: String!) {
    patient(id: $id) {
      id
      firstname
      lastname
      birthdate
      gender
      email
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
  mutation AddNewPatient($patient: PatientInput!) {
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
  query GetByUserID($userId: String!) {
    getByUserID(userId: $userId) {
      date_end
      date_start
      id
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
  mutation CreateRest(
    $userId: String!
    $type: String!
    $dateStart: DateTimeISO!
    $dateEnd: DateTimeISO!
  ) {
    createRest(userId: $userId, type: $type, dateStart: $dateStart, dateEnd: $dateEnd) {
      id
      type
      date_start
      date_end
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
 *      type: // value for 'type'
 *      dateStart: // value for 'dateStart'
 *      dateEnd: // value for 'dateEnd'
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
  query GetRoles {
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
export const GetServicesDocument = gql`
  query GetServices {
    services {
      id
      name
    }
  }
`;

/**
 * __useGetServicesQuery__
 *
 * To run a query within a React component, call `useGetServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetServicesQuery, GetServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options);
}
export function useGetServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetServicesQuery, GetServicesQueryVariables>(
    GetServicesDocument,
    options
  );
}
export function useGetServicesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetServicesQuery, GetServicesQueryVariables>(
    GetServicesDocument,
    options
  );
}
export type GetServicesQueryHookResult = ReturnType<typeof useGetServicesQuery>;
export type GetServicesLazyQueryHookResult = ReturnType<typeof useGetServicesLazyQuery>;
export type GetServicesSuspenseQueryHookResult = ReturnType<typeof useGetServicesSuspenseQuery>;
export type GetServicesQueryResult = Apollo.QueryResult<
  GetServicesQuery,
  GetServicesQueryVariables
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
