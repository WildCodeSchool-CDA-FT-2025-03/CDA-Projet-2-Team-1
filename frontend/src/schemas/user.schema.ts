import { gql } from '@apollo/client';

export const GET_ACTIVE_DOCTORS_BY_SERVICE = gql`
  query getActiveDoctorsByService($serviceId: String!) {
    activeDoctorsByService(serviceId: $serviceId) {
      id
      firstname
      lastname
      email
      phone
      specialization
      isActive
      service {
        id
        name
      }
    }
  }
`;
