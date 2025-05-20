/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type PatientEntity = {
  __typename?: 'PatientEntity';
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  ssn?: Maybe<SsnEntity>;
};

export type Query = {
  __typename?: 'Query';
  getUsers: Array<UserEntity>;
  patients: Array<PatientEntity>;
};

export type SsnEntity = {
  __typename?: 'SsnEntity';
  id: Scalars['String']['output'];
  number: Scalars['String']['output'];
  patient?: Maybe<Array<PatientEntity>>;
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
    ssn?: { __typename?: 'SsnEntity'; id: string; number: string } | null;
  }>;
};

export const GetPatientsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPatients' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'patients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ssn' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPatientsQuery, GetPatientsQueryVariables>;
