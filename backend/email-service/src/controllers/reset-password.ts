import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import transporter from '../services/mailer.service';
import Handlebars from 'handlebars';
import getTemplate from '../utils/template.util';
import { ResetPasswordPayload } from '../types/payload.type';

async function resetPassword(req: Request, res: Response) {
  const payload = res.locals.payload;

  if (payload.serviceOrigin !== 'auth') {
    throw new Error('Bad service origin');
  }

  try {
    const view = getTemplate('reset.view.html');
    const template = Handlebars.compile(view);

    const payload: ResetPasswordPayload = {
      userId: 'foo',
    };

    //TOFIX: check if secret key is defined
    const token = sign(payload, process.env.SECRET_KEY_TOKEN_EMAIL!, { expiresIn: '1h' });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'maximilien.philippe@protonmail.com',
      subject: 'Changer de mot de passe',
      html: template({ url: `http://localhost:7000/service/${token}` }),
    };

    await transporter.sendMail(mailOptions);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export default resetPassword;
