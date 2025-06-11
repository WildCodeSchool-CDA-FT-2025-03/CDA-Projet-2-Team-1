import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string()
    .email()
    .pattern(/^[^@\s]+@hopital\.gouv\.fr$/)
    .required()
    .messages({
      'string.empty': 'Le champ email est requis.',
      'string.email': 'Le champ email doit être une adresse email valide.',
    }),
  firstname: Joi.string()
    .pattern(
      /^[A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+(-[A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+)? [A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+(-[A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+)?$/
    )
    .required()
    .messages({
      'string.empty': 'Le champ prénom est requis.',
      'string.pattern.base': 'Les Prénoms simples et composés doivent commencer par une majuscule',
    }),
  lastname: Joi.string()
    .pattern(
      /^[A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+(-[A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+)? [A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+(-[A-ZÉÈÀÂÊÎÔÛÙÇ][a-zéèàâêîôûùç]+)?$/
    )
    .required()
    .messages({
      'string.empty': 'Le champ prénom est requis.',
      'string.pattern.base': 'Les Noms simples et composés doivent commencer par une majuscule',
    }),
});

export default function validateFieldsQuery(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const erreurs = error.details.map((detail) => detail.message);
    res.status(400).json({ message: 'Validation échouée', erreurs });
    return;
  }

  next();
}
