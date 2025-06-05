import { gql } from '@apollo/client';

export const GET_CONSULTATION_BY_DATE = gql`
  query getConsultationByDay($date: DateTimeISO!) {
    getConsultationByDay(date: $date) {
      date_end
      date_start
      id
      reason
      additional_notes
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
      date_end
      date_start
      id
      reason
      additional_notes
      patient {
        id
        firstname
        lastname
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
      patient {
        id
        firstname
        lastname
        ssn {
          number
        }
      }
      doctor {
        id
        firstname
        lastname
        service {
          id
          name
        }
      }
    }
  }
`;
