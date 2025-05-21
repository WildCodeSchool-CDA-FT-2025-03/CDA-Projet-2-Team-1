import { gql } from '@apollo/client';

export const GET_REST_BY_USER_ID = gql`
  query GetByUserID($userId: String!) {
    getByUserID(userId: $userId) {
      date_end
      date_start
      id
      type
    }
  }
`;
