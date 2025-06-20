import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query GetServices {
    getServices {
      id
      name
    }
  }
`;

export const GET_ACTIVE_SERVICES = gql`
  query getActiveServices {
    activeServices {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;
