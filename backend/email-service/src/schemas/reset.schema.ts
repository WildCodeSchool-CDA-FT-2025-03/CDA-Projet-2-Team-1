import Joi from 'joi';

export const resetPasswordSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  email: Joi.string().email().required(),
  serviceOrigin: Joi.string().required(),
});
