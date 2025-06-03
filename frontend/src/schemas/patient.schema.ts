import { gql } from '@apollo/client';

// Requête pour la liste basique des patients
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

// Requête pour les détails complets d'un patient
export const GET_PATIENT_DETAILS = gql`
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
