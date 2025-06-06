/* eslint-disable node/no-unpublished-import */
import { GraphQLSchema, graphql, print } from 'graphql';
import getSchema from '../schemas/schemas';
import { gql } from 'graphql-tag';

const ADD_PATIENT = gql`
  mutation AddNewPatient($patient: PatientInput!) {
    addNewPatient(patient: $patient)
  }
`;

const patient = {
  firstname: 'Jean',
  lastname: 'Dupont',
  email: 'jean.dupont@example.com',
  birthdate: '1990-05-15T00:00:00.000Z',
  gender: '',
  city: {
    name: 'Paris',
    zip_code: '75014',
  },
  ssn: {
    number: '123456789012345',
  },
};

describe('patient resolvers', () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await getSchema();
  });

  it('Should be insert', async () => {
    const result = await graphql({
      schema: schema,
      source: print(ADD_PATIENT),
      variableValues: {
        patient: patient,
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toBeDefined();
    expect(result.data?.addNewPatient).toBeDefined();
  });

  it('Should be not insert, is not a email', async () => {
    const result = await graphql({
      schema: schema,
      source: print(ADD_PATIENT),
      variableValues: {
        patient: {
          ...patient,
          email: 'foo',
        },
      },
    });

    expect(result.errors).toBeDefined();
  });

  it('Should be not insert, is not a ssn', async () => {
    const result = await graphql({
      schema: schema,
      source: print(ADD_PATIENT),
      variableValues: {
        patient: {
          ...patient,
          ssn: '123456',
        },
      },
    });

    expect(result.errors).toBeDefined();
  });
});
