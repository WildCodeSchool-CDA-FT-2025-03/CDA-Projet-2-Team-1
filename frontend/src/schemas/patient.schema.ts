import { gql } from '@apollo/client';

export const GET_PATIENTS = gql`
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
