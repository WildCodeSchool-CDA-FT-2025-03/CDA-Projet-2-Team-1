import { gql } from '@apollo/client';

export const GET_BY_USER_ID = gql`
  query getByUserId($userId: String!) {
    getByUserID(userId: $userId) {
      id
      date_start
      date_end
      type
    }
  }
`;

export const CREATE_REST = gql`
  mutation createRest(
    $userId: String!
    $dateStart: DateTimeISO!
    $dateEnd: DateTimeISO!
    $type: String!
  ) {
    createRest(userId: $userId, dateStart: $dateStart, dateEnd: $dateEnd, type: $type) {
      id
      date_start
      date_end
      type
    }
  }
`;
