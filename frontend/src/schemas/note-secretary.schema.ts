import { gql } from '@apollo/client';

export const GET_NOTE_SECRETARY_BY_CONSULTATION_ID = gql`
  query getNoteSecretaryByConsultationId($consultationId: String!) {
    getNoteSecretaryByConsultationId(consultationId: $consultationId) {
      id
      text
      created_at
      updated_at
    }
  }
`;

export const CREATE_NOTE_SECRETARY = gql`
  mutation createNoteSecretary($noteSecretary: NoteSecretaryInput!) {
    createNoteSecretary(noteSecretary: $noteSecretary) {
      id
      text
    }
  }
`;
