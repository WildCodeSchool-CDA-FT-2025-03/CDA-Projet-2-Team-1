import { gql } from '@apollo/client';

export const GET_PATIENTS_BASIC = gql`
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

export const ADD_NEW_PATIENT = gql`
  mutation addNewPatient($patient: PatientInput!) {
    addNewPatient(patient: $patient)
  }
`;
