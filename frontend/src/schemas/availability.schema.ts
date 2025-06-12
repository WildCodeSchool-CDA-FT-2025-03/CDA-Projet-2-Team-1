import { gql } from '@apollo/client';

export const GET_DOCTOR_AVAILABILITIES = gql`
  query getDoctorAvailabilities($doctorId: ID!) {
    doctorAvailabilities(doctorId: $doctorId) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;

export const GET_DOCTOR_AVAILABILITIES_BY_DAY = gql`
  query getDoctorAvailabilitiesByDay($doctorId: ID!, $dayOfWeek: Int!) {
    doctorAvailabilitiesByDay(doctorId: $doctorId, dayOfWeek: $dayOfWeek) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;

export const CREATE_AVAILABILITY = gql`
  mutation createAvailability($input: CreateAvailabilityInput!) {
    createAvailability(input: $input) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;

export const UPDATE_AVAILABILITY = gql`
  mutation updateAvailability($id: ID!, $input: UpdateAvailabilityInput!) {
    updateAvailability(id: $id, input: $input) {
      id
      dayOfWeek
      startTime
      endTime
      isActive
      createdAt
    }
  }
`;

export const DELETE_AVAILABILITY = gql`
  mutation deleteAvailability($id: ID!) {
    deleteAvailability(id: $id)
  }
`;
