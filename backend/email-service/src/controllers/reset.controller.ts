import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import Handlebars from 'handlebars';
import transporter from '../services/mailer.service';
import getTemplate from '../utils/template.util';
import { ResetPasswordPayload } from '../types/payload.type';
import { HttpError } from '../types/error.type';
import { resetPasswordSchema } from '../schemas/reset.schema';

async function resetPassword(req: Request, res: Response) {
  if (!process.env.SECRET_KEY_TOKEN_EMAIL) {
    throw new HttpError(500, 'Missing secret email key');
  }

  const payloadAuth = res.locals.payload;

  const { error } = resetPasswordSchema.validate(payloadAuth);
  if (error) {
    throw new HttpError(400, error.message);
  }

  try {
    const view = getTemplate('reset.view.html');
    const template = Handlebars.compile(view);

    const payloadEmail: ResetPasswordPayload = {
      userId: payloadAuth.userId,
    };

    const token = sign(payloadEmail, process.env.SECRET_KEY_TOKEN_EMAIL, { expiresIn: '1h' });
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: payloadAuth.email,
      subject: 'Care Plan changer de mot de passe',
      html: template({ url: `http://localhost:7000/auth/reset/${token}` }),
    };

    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (error) {
    throw new HttpError(401, `${error}`);
  }
}

export default resetPassword;
