import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Le champ email est requis.',
      'string.email': 'Le champ email doit être une adresse email valide.',
    }),
  password: Joi.string()
    .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{12,}$/)
    .required()
    .messages({
      'string.empty': 'Le champ mot de passe est requis.',
      'string.pattern.base':
        'Le mot de passe doit contenir au minimum 12 caractères, une majuscule, un chiffre et un caractère spécial.',
    }),
});

export function validateFormLogin(email: string, password: string): string[] {
  const { error } = loginSchema.validate({ email, password }, { abortEarly: false });

  if (error) {
    return error.details.map((detail) => detail.message);
  }

  return [];
}
