import { gql } from '@apollo/client';

export const GET_PATIENTS_BASIC = gql`
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

export const GET_PATIENT_DETAILS = gql`
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

export const ADD_PATIENT = gql`
  mutation AddPatient($patient: PatientInput!) {
    AddPatient(patient: $patient)
  }
`;
