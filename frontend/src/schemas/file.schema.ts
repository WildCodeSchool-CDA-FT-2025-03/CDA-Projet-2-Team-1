import { gql } from '@apollo/client';

export const GET_FILES_BY_CONSULTATION_ID = gql`
  query getFilesByConsultationId($consultationId: String!) {
    getFilesByConsultationId(consultationId: $consultationId) {
      id
      name
      created_at
      path
    }
  }
`;
