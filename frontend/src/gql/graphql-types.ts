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
  getRoles: Array<RoleEntity>;
  getServices: Array<ServiceEntity>;
  getUsers: Array<UserEntity>;
  patients: Array<PatientEntity>;
};

export type QueryGetByUserIdArgs = {
  userId: Scalars['String']['input'];
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
