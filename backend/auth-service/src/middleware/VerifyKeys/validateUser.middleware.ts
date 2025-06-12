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
  service_id: Joi.number().integer().min(1).max(30).required(),
  password: Joi.string().required(),
});

export default function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res.sendStatus(422);
    return;
  }

  next();
}
