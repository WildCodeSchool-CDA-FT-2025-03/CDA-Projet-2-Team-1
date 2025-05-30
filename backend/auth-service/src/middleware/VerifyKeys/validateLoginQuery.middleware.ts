import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

// Définition du schéma de validation
const schema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Le champ email est requis.',
    'string.email': 'Le champ email doit être une adresse email valide.',
  }),
  password: Joi.string()
    .pattern(
      new RegExp(`^
      (?=.*[A-Z])
      (?=.*[0-9])
      (?=.*[^A-Za-z0-9])
      .{12,}$`)
    )
    .required()
    .messages({
      'string.empty': 'Le champ mot de passe est requis.',
      'string.pattern.base':
        'Le mot de passe doit contenir au minimum 12 caractères, une majuscule, un chiffre et un caractère spécial.',
    }),
});

// Middleware de validation
export default function validateLoginQuery(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const erreurs = error.details.map((detail) => detail.message);
    res.status(400).json({ message: 'Validation échouée', erreurs });
    return;
  }

  next();
}
