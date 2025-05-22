import { gql } from '@apollo/client';

export const GET_CONSULTATION_BY_DATE = gql`
  query GetByDay($date: DateTimeISO!) {
    getByDay(date: $date) {
      date_end
      date_start
      id
      doctor {
        id
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
