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

export type Mutation = {
  __typename?: 'Mutation';
  createRest: RestEntity;
};

export type MutationCreateRestArgs = {
  dateEnd: Scalars['DateTimeISO']['input'];
  dateStart: Scalars['DateTimeISO']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
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
