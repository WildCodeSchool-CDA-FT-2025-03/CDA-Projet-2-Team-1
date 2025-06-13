import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import Handlebars from 'handlebars';
import transporter from '../services/mailer.service';
import getTemplate from '../utils/template.util';
import { ResetPasswordPayload } from '../types/payload.type';
import { HttpError } from '../types/error.type';

async function resetPassword(req: Request, res: Response) {
  if (!process.env.SECRET_KEY_TOKEN_EMAIL) {
    throw new HttpError(500, 'Missing secret email key');
  }

  const payloadHost = res.locals.payload;

  if (payloadHost.serviceOrigin !== 'auth') {
    throw new HttpError(401, 'Unauthorized, server origin');
  }

  try {
    const view = getTemplate('reset.view.html');
    const template = Handlebars.compile(view);

    const payload: ResetPasswordPayload = {
      userId: payloadHost.userId,
    };

    const token = sign(payload, process.env.SECRET_KEY_TOKEN_EMAIL, { expiresIn: '1h' });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'maximilien.philippe@protonmail.com',
      subject: 'Care Plan changer de mot de passe',
      html: template({ url: `http://localhost:7000/auth/reset/${token}` }),
    };

    await transporter.sendMail(mailOptions);
    res.status(200);
  } catch (error) {
    throw new HttpError(401, `${error}`);
  }
}

export default resetPassword;
