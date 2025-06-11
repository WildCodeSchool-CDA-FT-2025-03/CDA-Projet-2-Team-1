import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string()
    .email()
    .pattern(/^[^@\s]+@hopital\.gouv\.fr$/)
    .required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  role_id: Joi.number().integer().min(1).max(4).required(),
  gender: Joi.string()
    .required()
    .pattern(/^[MF]$/),
  service_id: Joi.number().integer().min(1).required(),
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
