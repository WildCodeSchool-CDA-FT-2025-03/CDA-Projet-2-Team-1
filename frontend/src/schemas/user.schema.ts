import { gql } from '@apollo/client';

export const GET_DOCTORS = gql`
  query getDoctors {
    doctors {
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

export const GET_ALL_DOCTORS = gql`
  query getAllDoctors {
    doctors {
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

export const GET_ACTIVE_DOCTORS = gql`
  query getActiveDoctors {
    activeDoctors {
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

export const GET_DOCTOR_BY_ID = gql`
  query getDoctor($id: String!) {
    doctor(id: $id) {
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
      availabilities {
        id
        dayOfWeek
        startTime
        endTime
        isActive
      }
    }
  }
`;

export const SEARCH_DOCTORS = gql`
  query searchDoctors($searchTerm: String!, $serviceId: String) {
    searchDoctors(searchTerm: $searchTerm, serviceId: $serviceId) {
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

export const CREATE_DOCTOR = gql`
  mutation createDoctor($input: CreateDoctorInput!) {
    createDoctor(input: $input) {
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

export const UPDATE_DOCTOR = gql`
  mutation updateDoctor($id: String!, $input: UpdateDoctorInput!) {
    updateDoctor(id: $id, input: $input) {
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

export const DELETE_DOCTOR = gql`
  mutation deleteDoctor($id: String!) {
    deleteDoctor(id: $id)
  }
`;
