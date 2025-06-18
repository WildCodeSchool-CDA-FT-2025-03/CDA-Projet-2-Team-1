import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import transporter from '../services/mailer.service';
import getEmailTemplate from '../utils/template.util';
import { ResetPasswordPayload } from '../types/payload.type';
import { HttpError } from '../types/error.type';
import { resetPasswordSchema } from '../schemas/reset.schema';
import logger from '../services/logger.service';

async function resetPassword(req: Request, res: Response) {
  if (!process.env.SECRET_KEY_TOKEN_EMAIL) {
    throw new HttpError(500, 'Missing secret email key');
  }

  const payloadAuth = res.locals.payload;

  const { error } = resetPasswordSchema.validate(payloadAuth);
  if (error) {
    throw new HttpError(422, error.message);
  }

  try {
    const emailTemplate = getEmailTemplate('reset.view.html');

    const payloadEmail: ResetPasswordPayload = {
      userId: payloadAuth.userId,
    };

    const token = sign(payloadEmail, process.env.SECRET_KEY_TOKEN_EMAIL, { expiresIn: '1h' });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: payloadAuth.email,
      subject: 'Care Plan changer de mot de passe',
      html: emailTemplate({ url: `${payloadAuth.resetUrl}?token=${token}` }),
    };

    await transporter.sendMail(mailOptions);
    logger.info(`Email sent successfully to ${payloadAuth.email}`);
    res.sendStatus(204);
  } catch (error) {
    throw new HttpError(400, `${error}`);
  }
}

export default resetPassword;
