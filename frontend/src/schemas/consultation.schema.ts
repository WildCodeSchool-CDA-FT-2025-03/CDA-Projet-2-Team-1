import { gql } from '@apollo/client';

export const GET_CONSULTATION_BY_DAY = gql`
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

export const GET_CONSULTATION_BY_SSN_FOR_AGENT = gql`
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

export const GET_CONSULTATIONS_BY_DOCTOR_AND_DATE_RANGE = gql`
  query getConsultationsByDoctorAndDateRange(
    $doctorId: String!
    $startDate: DateTimeISO!
    $endDate: DateTimeISO!
  ) {
    getConsultationsByDoctorAndDateRange(
      doctorId: $doctorId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      date_start
      date_end
      reason
      additional_notes
      created_at
      updated_at
      patient {
        id
        firstname
        lastname
        email
        ssn {
          number
        }
      }
    }
  }
`;

export const CREATE_CONSULTATION = gql`
  mutation createConsultation($input: CreateConsultationInput!) {
    createConsultation(input: $input) {
      id
      date_start
      date_end
      reason
      additional_notes
      created_at
      updated_at
      doctor {
        id
        firstname
        lastname
        specialization
        service {
          id
          name
        }
      }
      patient {
        id
        firstname
        lastname
        email
        ssn {
          number
        }
      }
    }
  }
`;
