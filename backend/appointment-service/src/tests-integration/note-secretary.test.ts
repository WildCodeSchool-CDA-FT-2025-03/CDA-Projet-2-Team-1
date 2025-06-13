/* eslint-disable node/no-unpublished-import */
import { GraphQLSchema, graphql, print } from 'graphql';
import getSchema from '../schemas/schemas';
import { gql } from 'graphql-tag';

const CREATE_NOTE_SECRETARY = gql`
  mutation CreateNoteSecretary($text: String!, $consultationId: String!) {
    createNoteSecretary(text: $text, consultationId: $consultationId) {
      id
      text
      created_at
      updated_at
      consultation {
        id
      }
    }
  }
`;

const GET_NOTE_SECRETARY_BY_CONSULTATION_ID = gql`
  query GetNoteSecretaryByConsultationId($consultationId: String!) {
    getNoteSecretaryByConsultationId(consultationId: $consultationId) {
      id
      text
      created_at
      updated_at
      consultation {
        id
      }
    }
  }
`;

describe('note secretary resolvers', () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await getSchema();
  });

  it('Should not create note secretary, consultation not found', async () => {
    const result = await graphql({
      schema: schema,
      source: print(CREATE_NOTE_SECRETARY),
      variableValues: {
        text: 'test note secretary',
        consultationId: '00000000-0000-0000-0000-000000000000', // ID inexistant
      },
    });

    expect(result.errors).toBeDefined();
    expect(result.errors?.[0].message).toContain('Consultation not found');
  });

  it('Should return empty array for non-existent consultation', async () => {
    const result = await graphql({
      schema: schema,
      source: print(GET_NOTE_SECRETARY_BY_CONSULTATION_ID),
      variableValues: {
        consultationId: '00000000-0000-0000-0000-000000000000',
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toBeDefined();
    expect(result.data?.getNoteSecretaryByConsultationId).toEqual([]);
  });

  it('Should not create note secretary, text too long', async () => {
    const longText = 'A'.repeat(513); // Plus de 512 caractères

    const result = await graphql({
      schema: schema,
      source: print(CREATE_NOTE_SECRETARY),
      variableValues: {
        text: longText,
        consultationId: '00000000-0000-0000-0000-000000000000',
      },
    });

    expect(result.errors).toBeDefined();
  });

  it('Should not create note secretary, text is empty', async () => {
    const result = await graphql({
      schema: schema,
      source: print(CREATE_NOTE_SECRETARY),
      variableValues: {
        text: '', // Texte vide
        consultationId: '00000000-0000-0000-0000-000000000000',
      },
    });

    expect(result.errors).toBeDefined();
  });

  it('Should not create note secretary, note already exists for consultation', async () => {
    const consultationId = '11111111-1111-1111-1111-111111111111';

    const firstResult = await graphql({
      schema: schema,
      source: print(CREATE_NOTE_SECRETARY),
      variableValues: {
        text: 'Première note',
        consultationId: consultationId,
      },
    });

    const secondResult = await graphql({
      schema: schema,
      source: print(CREATE_NOTE_SECRETARY),
      variableValues: {
        text: 'Deuxième note',
        consultationId: consultationId,
      },
    });

    expect(secondResult.errors).toBeDefined();

    if (!firstResult.errors) {
      expect(secondResult.errors?.[0].message).toContain(
        'A note already exists for this consultation'
      );
    }
  });
});
