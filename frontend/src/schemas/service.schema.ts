import { gql } from '@apollo/client';

export const GET_ALL_SERVICES = gql`
  query getAllServices {
    services {
      id
      name
      description
      isActive
      createdAt
      updatedAt
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

export const GET_SERVICE = gql`
  query getService($id: String!) {
    service(id: $id) {
      id
      name
      description
      isActive
      createdAt
      updatedAt
      doctors {
        id
        firstname
        lastname
        email
        specialization
        isActive
      }
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation createService($input: CreateServiceInput!) {
    createService(input: $input) {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation updateService($id: String!, $input: UpdateServiceInput!) {
    updateService(id: $id, input: $input) {
      id
      name
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_SERVICE = gql`
  mutation deleteService($id: String!) {
    deleteService(id: $id)
  }
`;
