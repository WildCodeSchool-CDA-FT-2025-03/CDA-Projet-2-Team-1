import { gql } from '@apollo/client';

export const GET_CONSULTATION_REASONS = gql`
  query getConsultationReasons {
    getConsultationReasons {
      id
      name
    }
  }
`;
