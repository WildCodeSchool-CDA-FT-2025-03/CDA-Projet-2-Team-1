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
