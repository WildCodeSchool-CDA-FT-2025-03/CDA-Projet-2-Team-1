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
  date_end: Scalars['DateTimeISO']['output'];
  date_start: Scalars['DateTimeISO']['output'];
  doctor: UserEntity;
  files: Array<FileEntity>;
  id: Scalars['String']['output'];
  note_secretary: NoteSecretaryEntity;
  patient: PatientEntity;
};

export type FileEntity = {
  __typename?: 'FileEntity';
  consultation: ConsultationEntity;
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  is_confidential: Scalars['Boolean']['output'];
  is_deleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewPatient: Scalars['String']['output'];
  createNoteSecretary: NoteSecretaryEntity;
  createRest: RestEntity;
  uploadFile: FileEntity;
};

export type MutationAddNewPatientArgs = {
  patient: PatientInput;
};

export type MutationCreateNoteSecretaryArgs = {
  consultationId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type MutationCreateRestArgs = {
  dateEnd: Scalars['DateTimeISO']['input'];
  dateStart: Scalars['DateTimeISO']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MutationUploadFileArgs = {
  consultationId: Scalars['String']['input'];
  isConfidential: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  path: Scalars['String']['input'];
};

export type NoteSecretaryEntity = {
  __typename?: 'NoteSecretaryEntity';
  consultation: ConsultationEntity;
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};

export type PatientEntity = {
  __typename?: 'PatientEntity';
  birthdate: Scalars['DateTimeISO']['output'];
  city: CityEntity;
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  ssn: SsnEntity;
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
  getByUserID: Array<RestEntity>;
  getConsultationByDay: Array<ConsultationEntity>;
  getConsultationById: ConsultationEntity;
  getConsultationBySsnForAgent: Array<ConsultationEntity>;
  getFilesByConsultationId: Array<FileEntity>;
  getNoteSecretaryByConsultationId: Array<NoteSecretaryEntity>;
  getRoles: Array<RoleEntity>;
  getServices: Array<ServiceEntity>;
  getUsers: Array<UserEntity>;
  patient: Maybe<PatientEntity>;
  patientBySsn: Maybe<PatientEntity>;
  patients: Array<PatientEntity>;
};

export type QueryGetByUserIdArgs = {
  userId: Scalars['String']['input'];
};

export type QueryGetConsultationByDayArgs = {
  date: Scalars['DateTimeISO']['input'];
};

export type QueryGetConsultationByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetConsultationBySsnForAgentArgs = {
  ssn: Scalars['String']['input'];
};

export type QueryGetFilesByConsultationIdArgs = {
  consultationId: Scalars['String']['input'];
};

export type QueryGetNoteSecretaryByConsultationIdArgs = {
  consultationId: Scalars['String']['input'];
};

export type QueryPatientArgs = {
  id: Scalars['String']['input'];
};

export type QueryPatientBySsnArgs = {
  ssn: Scalars['String']['input'];
};

export type RestEntity = {
  __typename?: 'RestEntity';
  date_end: Scalars['DateTimeISO']['output'];
  date_start: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
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

export type UserEntity = {
  __typename?: 'UserEntity';
  created_at: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  genre: Scalars['String']['output'];
  id: Scalars['String']['output'];
  is_active: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  role: Maybe<RoleEntity>;
  service: Maybe<ServiceEntity>;
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

export type GetConsultationByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetConsultationByIdQuery = {
  __typename?: 'Query';
  getConsultationById: {
    __typename?: 'ConsultationEntity';
    id: string;
    date_start: Date;
    date_end: Date;
    patient: {
      __typename?: 'PatientEntity';
      firstname: string;
      lastname: string;
      birthdate: Date;
      gender: string;
      email: string;
      ssn: { __typename?: 'SsnEntity'; number: string };
      city: { __typename?: 'CityEntity'; name: string; zip_code: string };
    };
    doctor: {
      __typename?: 'UserEntity';
      firstname: string;
      lastname: string;
      service: { __typename?: 'ServiceEntity'; name: string } | null;
    };
  };
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

export type GetFilesByConsultationIdQueryVariables = Exact<{
  consultationId: Scalars['String']['input'];
}>;

export type GetFilesByConsultationIdQuery = {
  __typename?: 'Query';
  getFilesByConsultationId: Array<{
    __typename?: 'FileEntity';
    id: string;
    name: string;
    created_at: Date;
    path: string;
  }>;
};

export type UploadFileMutationVariables = Exact<{
  consultationId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  path: Scalars['String']['input'];
  isConfidential: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UploadFileMutation = {
  __typename?: 'Mutation';
  uploadFile: { __typename?: 'FileEntity'; id: string; name: string; path: string };
};

export type GetNoteSecretaryByConsultationIdQueryVariables = Exact<{
  consultationId: Scalars['String']['input'];
}>;

export type GetNoteSecretaryByConsultationIdQuery = {
  __typename?: 'Query';
  getNoteSecretaryByConsultationId: Array<{
    __typename?: 'NoteSecretaryEntity';
    id: string;
    text: string;
    created_at: Date;
    updated_at: Date;
  }>;
};

export type CreateNoteSecretaryMutationVariables = Exact<{
  text: Scalars['String']['input'];
  consultationId: Scalars['String']['input'];
}>;

export type CreateNoteSecretaryMutation = {
  __typename?: 'Mutation';
  createNoteSecretary: {
    __typename?: 'NoteSecretaryEntity';
    id: string;
    text: string;
    created_at: Date;
    updated_at: Date;
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

export type PatientBySsnQueryVariables = Exact<{
  ssn: Scalars['String']['input'];
}>;

export type PatientBySsnQuery = {
  __typename?: 'Query';
  patientBySsn: {
    __typename?: 'PatientEntity';
    id: string;
    firstname: string;
    lastname: string;
    ssn: { __typename?: 'SsnEntity'; number: string };
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
    id: number;
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
    id: number;
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
  getServices: Array<{ __typename?: 'ServiceEntity'; id: number; name: string }>;
};

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
export const GetConsultationByIdDocument = gql`
  query getConsultationById($id: String!) {
    getConsultationById(id: $id) {
      id
      date_start
      date_end
      patient {
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
      doctor {
        firstname
        lastname
        service {
          name
        }
      }
    }
  }
`;

/**
 * __useGetConsultationByIdQuery__
 *
 * To run a query within a React component, call `useGetConsultationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetConsultationByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetConsultationByIdQuery,
    GetConsultationByIdQueryVariables
  > &
    ({ variables: GetConsultationByIdQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetConsultationByIdQuery, GetConsultationByIdQueryVariables>(
    GetConsultationByIdDocument,
    options
  );
}
export function useGetConsultationByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConsultationByIdQuery,
    GetConsultationByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetConsultationByIdQuery, GetConsultationByIdQueryVariables>(
    GetConsultationByIdDocument,
    options
  );
}
export function useGetConsultationByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetConsultationByIdQuery, GetConsultationByIdQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetConsultationByIdQuery, GetConsultationByIdQueryVariables>(
    GetConsultationByIdDocument,
    options
  );
}
export type GetConsultationByIdQueryHookResult = ReturnType<typeof useGetConsultationByIdQuery>;
export type GetConsultationByIdLazyQueryHookResult = ReturnType<
  typeof useGetConsultationByIdLazyQuery
>;
export type GetConsultationByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetConsultationByIdSuspenseQuery
>;
export type GetConsultationByIdQueryResult = Apollo.QueryResult<
  GetConsultationByIdQuery,
  GetConsultationByIdQueryVariables
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
export const GetFilesByConsultationIdDocument = gql`
  query getFilesByConsultationId($consultationId: String!) {
    getFilesByConsultationId(consultationId: $consultationId) {
      id
      name
      created_at
      path
    }
  }
`;

/**
 * __useGetFilesByConsultationIdQuery__
 *
 * To run a query within a React component, call `useGetFilesByConsultationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesByConsultationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesByConsultationIdQuery({
 *   variables: {
 *      consultationId: // value for 'consultationId'
 *   },
 * });
 */
export function useGetFilesByConsultationIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFilesByConsultationIdQuery,
    GetFilesByConsultationIdQueryVariables
  > &
    ({ variables: GetFilesByConsultationIdQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilesByConsultationIdQuery, GetFilesByConsultationIdQueryVariables>(
    GetFilesByConsultationIdDocument,
    options
  );
}
export function useGetFilesByConsultationIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilesByConsultationIdQuery,
    GetFilesByConsultationIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilesByConsultationIdQuery, GetFilesByConsultationIdQueryVariables>(
    GetFilesByConsultationIdDocument,
    options
  );
}
export function useGetFilesByConsultationIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetFilesByConsultationIdQuery,
        GetFilesByConsultationIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetFilesByConsultationIdQuery,
    GetFilesByConsultationIdQueryVariables
  >(GetFilesByConsultationIdDocument, options);
}
export type GetFilesByConsultationIdQueryHookResult = ReturnType<
  typeof useGetFilesByConsultationIdQuery
>;
export type GetFilesByConsultationIdLazyQueryHookResult = ReturnType<
  typeof useGetFilesByConsultationIdLazyQuery
>;
export type GetFilesByConsultationIdSuspenseQueryHookResult = ReturnType<
  typeof useGetFilesByConsultationIdSuspenseQuery
>;
export type GetFilesByConsultationIdQueryResult = Apollo.QueryResult<
  GetFilesByConsultationIdQuery,
  GetFilesByConsultationIdQueryVariables
>;
export const UploadFileDocument = gql`
  mutation uploadFile(
    $consultationId: String!
    $name: String!
    $path: String!
    $isConfidential: Boolean
  ) {
    uploadFile(
      consultationId: $consultationId
      name: $name
      path: $path
      isConfidential: $isConfidential
    ) {
      id
      name
      path
    }
  }
`;
export type UploadFileMutationFn = Apollo.MutationFunction<
  UploadFileMutation,
  UploadFileMutationVariables
>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      consultationId: // value for 'consultationId'
 *      name: // value for 'name'
 *      path: // value for 'path'
 *      isConfidential: // value for 'isConfidential'
 *   },
 * });
 */
export function useUploadFileMutation(
  baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(
    UploadFileDocument,
    options
  );
}
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<
  UploadFileMutation,
  UploadFileMutationVariables
>;
export const GetNoteSecretaryByConsultationIdDocument = gql`
  query getNoteSecretaryByConsultationId($consultationId: String!) {
    getNoteSecretaryByConsultationId(consultationId: $consultationId) {
      id
      text
      created_at
      updated_at
    }
  }
`;

/**
 * __useGetNoteSecretaryByConsultationIdQuery__
 *
 * To run a query within a React component, call `useGetNoteSecretaryByConsultationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoteSecretaryByConsultationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoteSecretaryByConsultationIdQuery({
 *   variables: {
 *      consultationId: // value for 'consultationId'
 *   },
 * });
 */
export function useGetNoteSecretaryByConsultationIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNoteSecretaryByConsultationIdQuery,
    GetNoteSecretaryByConsultationIdQueryVariables
  > &
    (
      | { variables: GetNoteSecretaryByConsultationIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNoteSecretaryByConsultationIdQuery,
    GetNoteSecretaryByConsultationIdQueryVariables
  >(GetNoteSecretaryByConsultationIdDocument, options);
}
export function useGetNoteSecretaryByConsultationIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNoteSecretaryByConsultationIdQuery,
    GetNoteSecretaryByConsultationIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNoteSecretaryByConsultationIdQuery,
    GetNoteSecretaryByConsultationIdQueryVariables
  >(GetNoteSecretaryByConsultationIdDocument, options);
}
export function useGetNoteSecretaryByConsultationIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetNoteSecretaryByConsultationIdQuery,
        GetNoteSecretaryByConsultationIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetNoteSecretaryByConsultationIdQuery,
    GetNoteSecretaryByConsultationIdQueryVariables
  >(GetNoteSecretaryByConsultationIdDocument, options);
}
export type GetNoteSecretaryByConsultationIdQueryHookResult = ReturnType<
  typeof useGetNoteSecretaryByConsultationIdQuery
>;
export type GetNoteSecretaryByConsultationIdLazyQueryHookResult = ReturnType<
  typeof useGetNoteSecretaryByConsultationIdLazyQuery
>;
export type GetNoteSecretaryByConsultationIdSuspenseQueryHookResult = ReturnType<
  typeof useGetNoteSecretaryByConsultationIdSuspenseQuery
>;
export type GetNoteSecretaryByConsultationIdQueryResult = Apollo.QueryResult<
  GetNoteSecretaryByConsultationIdQuery,
  GetNoteSecretaryByConsultationIdQueryVariables
>;
export const CreateNoteSecretaryDocument = gql`
  mutation createNoteSecretary($text: String!, $consultationId: String!) {
    createNoteSecretary(text: $text, consultationId: $consultationId) {
      id
      text
      created_at
      updated_at
    }
  }
`;
export type CreateNoteSecretaryMutationFn = Apollo.MutationFunction<
  CreateNoteSecretaryMutation,
  CreateNoteSecretaryMutationVariables
>;

/**
 * __useCreateNoteSecretaryMutation__
 *
 * To run a mutation, you first call `useCreateNoteSecretaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteSecretaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteSecretaryMutation, { data, loading, error }] = useCreateNoteSecretaryMutation({
 *   variables: {
 *      text: // value for 'text'
 *      consultationId: // value for 'consultationId'
 *   },
 * });
 */
export function useCreateNoteSecretaryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNoteSecretaryMutation,
    CreateNoteSecretaryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateNoteSecretaryMutation, CreateNoteSecretaryMutationVariables>(
    CreateNoteSecretaryDocument,
    options
  );
}
export type CreateNoteSecretaryMutationHookResult = ReturnType<
  typeof useCreateNoteSecretaryMutation
>;
export type CreateNoteSecretaryMutationResult = Apollo.MutationResult<CreateNoteSecretaryMutation>;
export type CreateNoteSecretaryMutationOptions = Apollo.BaseMutationOptions<
  CreateNoteSecretaryMutation,
  CreateNoteSecretaryMutationVariables
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
export const PatientBySsnDocument = gql`
  query PatientBySsn($ssn: String!) {
    patientBySsn(ssn: $ssn) {
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
 * __usePatientBySsnQuery__
 *
 * To run a query within a React component, call `usePatientBySsnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientBySsnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientBySsnQuery({
 *   variables: {
 *      ssn: // value for 'ssn'
 *   },
 * });
 */
export function usePatientBySsnQuery(
  baseOptions: Apollo.QueryHookOptions<PatientBySsnQuery, PatientBySsnQueryVariables> &
    ({ variables: PatientBySsnQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PatientBySsnQuery, PatientBySsnQueryVariables>(
    PatientBySsnDocument,
    options
  );
}
export function usePatientBySsnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PatientBySsnQuery, PatientBySsnQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PatientBySsnQuery, PatientBySsnQueryVariables>(
    PatientBySsnDocument,
    options
  );
}
export function usePatientBySsnSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<PatientBySsnQuery, PatientBySsnQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PatientBySsnQuery, PatientBySsnQueryVariables>(
    PatientBySsnDocument,
    options
  );
}
export type PatientBySsnQueryHookResult = ReturnType<typeof usePatientBySsnQuery>;
export type PatientBySsnLazyQueryHookResult = ReturnType<typeof usePatientBySsnLazyQuery>;
export type PatientBySsnSuspenseQueryHookResult = ReturnType<typeof usePatientBySsnSuspenseQuery>;
export type PatientBySsnQueryResult = Apollo.QueryResult<
  PatientBySsnQuery,
  PatientBySsnQueryVariables
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
    getServices {
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
