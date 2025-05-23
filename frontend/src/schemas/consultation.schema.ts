import { gql } from '@apollo/client';

export const GET_CONSULTATION_BY_DATE = gql`
  query getConsultationByDay($date: DateTimeISO!) {
    getConsultationByDay(date: $date) {
      date_end
      date_start
      id
      doctor {
        id
        lastName
        service {
          name
        }
      }
      patient {
        firstName
        id
        lastName
        ssn {
          number
        }
      }
    }
  }
`;
