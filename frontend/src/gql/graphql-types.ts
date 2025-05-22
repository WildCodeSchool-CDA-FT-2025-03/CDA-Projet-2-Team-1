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

export type ConsultationEntity = {
  __typename?: 'ConsultationEntity';
  date_end: Scalars['DateTimeISO']['output'];
  date_start: Scalars['DateTimeISO']['output'];
  doctor: UserEntity;
  id: Scalars['String']['output'];
  patient: PatientEntity;
};

export type PatientEntity = {
  __typename?: 'PatientEntity';
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  ssn: SsnEntity;
};

export type Query = {
  __typename?: 'Query';
  getByUserID: Array<RestEntity>;
  getConsultationByDay: Array<ConsultationEntity>;
  getUsers: Array<UserEntity>;
  patients: Array<PatientEntity>;
};

export type QueryGetByUserIdArgs = {
  userId: Scalars['String']['input'];
};

export type QueryGetConsultationByDayArgs = {
  date: Scalars['DateTimeISO']['input'];
};

export type RestEntity = {
  __typename?: 'RestEntity';
  date_end: Scalars['DateTimeISO']['output'];
  date_start: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type SsnEntity = {
  __typename?: 'SsnEntity';
  id: Scalars['String']['output'];
  number: Scalars['String']['output'];
  patient: Array<PatientEntity>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['String']['output'];
  service: ServiceEntity;
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
      service: { __typename?: 'ServiceEntity'; name: string };
    };
    patient: {
      __typename?: 'PatientEntity';
      firstName: string;
      id: string;
      lastName: string;
      ssn: { __typename?: 'SsnEntity'; number: string };
    };
  }>;
};

export type GetPatientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPatientsQuery = {
  __typename?: 'Query';
  patients: Array<{
    __typename?: 'PatientEntity';
    id: string;
    firstName: string;
    lastName: string;
    ssn: { __typename?: 'SsnEntity'; number: string };
  }>;
};

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

export const GetConsultationByDayDocument = gql`
  query getConsultationByDay($date: DateTimeISO!) {
    getConsultationByDay(date: $date) {
      date_end
      date_start
      id
      doctor {
        id
        service {
          name
        }
      }
      patient {
        firstName
        id
        lastName
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
export const GetPatientsDocument = gql`
  query GetPatients {
    patients {
      id
      firstName
      lastName
      ssn {
        number
      }
    }
  }
`;

/**
 * __useGetPatientsQuery__
 *
 * To run a query within a React component, call `useGetPatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPatientsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPatientsQuery, GetPatientsQueryVariables>(GetPatientsDocument, options);
}
export function useGetPatientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPatientsQuery, GetPatientsQueryVariables>(
    GetPatientsDocument,
    options
  );
}
export function useGetPatientsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPatientsQuery, GetPatientsQueryVariables>(
    GetPatientsDocument,
    options
  );
}
export type GetPatientsQueryHookResult = ReturnType<typeof useGetPatientsQuery>;
export type GetPatientsLazyQueryHookResult = ReturnType<typeof useGetPatientsLazyQuery>;
export type GetPatientsSuspenseQueryHookResult = ReturnType<typeof useGetPatientsSuspenseQuery>;
export type GetPatientsQueryResult = Apollo.QueryResult<
  GetPatientsQuery,
  GetPatientsQueryVariables
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
