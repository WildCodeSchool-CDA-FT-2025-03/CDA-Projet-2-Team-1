import { gql } from '@apollo/client';

export const GET_ACTIVE_SERVICES = gql`
  query getActiveServices {
    activeServices {
      id
      name
      description
      isActive
    }
  }
`;

export const GET_ALL_SERVICES = gql`
  query getAllServices {
    services {
      id
      name
      description
      isActive
      doctors {
        id
        firstname
        lastname
      }
    }
  }
`;
