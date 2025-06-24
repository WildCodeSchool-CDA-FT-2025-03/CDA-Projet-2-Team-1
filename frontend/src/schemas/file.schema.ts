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

export const UPLOAD_FILE = gql`
  mutation uploadFile(
    $consultationId: String!
    $name: String!
    $path: String!
    $isConfidential: Boolean
  ) {
    uploadFile(
      consultationId: $consultationId
      name: $name
      path: $path
      isConfidential: $isConfidential
    ) {
      id
      name
      path
    }
  }
`;
