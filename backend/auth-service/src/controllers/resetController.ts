import { Request, Response } from 'express';
import { resetPasswordSchema } from '../schemas/reset.schema';
import { getIdByEmailRepository } from '../repository/user.repository';
import { createJwtRestForEmailService } from '../utils/jwtTokenCarePlan.utils';
import emailClient from '../services/email.service';

async function resetController(req: Request, res: Response) {
  const origin = req.headers.origin;
  const { error } = resetPasswordSchema.validate(req.body);
  if (!error && origin) {
    try {
      const resetUrl = `${origin}/auth/reset`;
      const userId = await getIdByEmailRepository(req.body.email);
      const token = createJwtRestForEmailService(userId, req.body.email, resetUrl);
      await emailClient.get('/reset', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      res.sendStatus(204); //202 ?
      return;
    }
  }

  res.sendStatus(204); //202 ?
}

export default resetController;
