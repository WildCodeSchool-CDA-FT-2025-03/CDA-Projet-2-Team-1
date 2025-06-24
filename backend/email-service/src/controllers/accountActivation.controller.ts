import { Request, Response } from 'express';

import transporter from '../services/mailer.service';
import getEmailTemplate from '../utils/template.util';
import { HttpError } from '../types/error.type';
import logger from '../services/logger.service';

async function accountActivation(_req: Request, res: Response) {
  if (!process.env.SECRET_KEY_TOKEN_EMAIL) {
    throw new HttpError(401, 'Missing secret email key');
  }

  /*const payloadAuth = res.locals.payload;

  const { error } = resetPasswordSchema.validate(payloadAuth);
  if (error) {
    throw new HttpError(422, error.message);
  }*/

  try {
    const emailTemplate = getEmailTemplate('reset.view.hbs');

    /*const payloadEmail: ResetPasswordPayload = {
      userId: '1'
    };*/

    /*const token = sign(payloadEmail, process.env.SECRET_KEY_TOKEN_EMAIL, { expiresIn: '1h' });*/

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'fsebal91@gmail.com',
      subject: 'activez votre compte carepan',
      html: emailTemplate({ url: `` }),
    };

    await transporter.sendMail(mailOptions);
    logger.info(``);
    res.sendStatus(204);
  } catch (error) {
    throw new HttpError(400, `${error}`);
  }
}

export default accountActivation;
