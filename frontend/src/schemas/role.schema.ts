import { gql } from '@apollo/client';

export const GET_ROLES = gql`
  query getRoles {
    getRoles {
      id
      name
    }
  }
`;
