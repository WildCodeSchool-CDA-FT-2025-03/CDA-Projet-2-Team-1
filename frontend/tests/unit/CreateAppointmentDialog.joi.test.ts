import { describe, it, expect } from 'vitest';
import Joi from 'joi';

const schema = Joi.object({
  ssn: Joi.string()
    .pattern(/^\d{15}$/)
    .required()
    .messages({
      'string.pattern.base': 'Le numéro de sécu doit contenir 15 chiffres',
      'string.empty': 'Le numéro de sécu est requis',
    }),
  lastname: Joi.string().required().messages({
    'string.empty': 'Le nom est requis',
  }),
  firstname: Joi.string().required().messages({
    'string.empty': 'Le prénom est requis',
  }),
});

describe('CreateAppointmentDialog Joi validation', () => {
  it('valide si le formulaire est correct', () => {
    const data = { ssn: '123456789012345', lastname: 'Dupont', firstname: 'Jean' };
    const { error } = schema.validate(data);
    expect(error).toBeUndefined();
  });

  it('rejette un ssn trop court', () => {
    const data = { ssn: '123', lastname: 'Dupont', firstname: 'Jean' };
    const { error } = schema.validate(data);
    expect(error?.details[0].message).toMatch(/15 chiffres/);
  });

  it('rejette un nom vide', () => {
    const data = { ssn: '123456789012345', lastname: '', firstname: 'Jean' };
    const { error } = schema.validate(data);
    expect(error?.details[0].message).toMatch(/nom est requis/);
  });

  it('rejette un prénom vide', () => {
    const data = { ssn: '123456789012345', lastname: 'Dupont', firstname: '' };
    const { error } = schema.validate(data);
    expect(error?.details[0].message).toMatch(/prénom est requis/);
  });
});
