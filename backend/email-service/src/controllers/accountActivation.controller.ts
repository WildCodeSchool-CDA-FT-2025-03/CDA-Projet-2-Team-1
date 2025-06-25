import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import transporter from '../services/mailer.service';
import getEmailTemplate from '../utils/template.util';
import { HttpError } from '../types/error.type';
import logger from '../services/logger.service';
import { activationAccountSchema } from '../schemas/activation.schema';
import { ActivationAccountPayload } from '../types/activation.type';

async function accountActivation(_req: Request, res: Response) {
  if (!process.env.SECRET_KEY_TOKEN_EMAIL) {
    throw new HttpError(401, 'Missing secret email key');
  }

  const payloadAuth = res.locals.payload;

  const { error } = activationAccountSchema.validate(payloadAuth);
  if (error) {
    throw new HttpError(422, error.message);
  }

  try {
    const emailTemplate = getEmailTemplate('activation.view.hbs');

    const payloadEmail: ActivationAccountPayload = {
      userId: payloadAuth.userId,
    };

    const token = sign(payloadEmail, process.env.SECRET_KEY_TOKEN_EMAIL, { expiresIn: '1h' });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: payloadAuth.email,
      subject: 'activez votre compte carepan',
      html: emailTemplate({ url: `${payloadAuth.activationUrl}?token=${token}` }),
    };

    await transporter.sendMail(mailOptions);
    logger.info(``);
    res.sendStatus(204);
  } catch (error) {
    throw new HttpError(400, `${error}`);
  }
}

export default accountActivation;
