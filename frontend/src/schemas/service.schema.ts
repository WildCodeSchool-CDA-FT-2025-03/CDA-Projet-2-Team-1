import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query GetServices {
    getServices {
      id
      name
    }
  }
`;

export const GET_DOCTORS_BY_SERVICE = gql`
  query GetDoctorsByService($serviceId: Int!) {
    doctorsByService(serviceId: $serviceId) {
      id
      firstname
      lastname
      email
      service {
        id
        name
      }
    }
  }
`;
