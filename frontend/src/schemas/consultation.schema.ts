import { gql } from '@apollo/client';

export const GET_CONSULTATION_BY_DATE = gql`
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

export const GET_CONSULTATION_BY_ID = gql`
  query getConsultationById($id: String!) {
    getConsultationById(id: $id) {
      id
      date_start
      date_end
      patient {
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
      doctor {
        firstname
        lastname
        service {
          name
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
