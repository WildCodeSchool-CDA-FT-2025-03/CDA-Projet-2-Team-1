import express, { Request, Response } from 'express';
import emailClient from '../services/email.service';
const registersController = express.Router();

//import des middlewares
import verifyToken from '../middleware/verifyToken.middleware';
import validateRole from '../middleware/VerifyKeys/validateRoleQuery.middleware';
import validateUser from '../middleware/VerifyKeys/validateUser.middleware';

/* import des utils */
import { hashPasswordArgonUtil } from '../utils/Argon.utils';

/* import des repository */
import { createUser } from '../repository/user.repository';
import { createJwtaccountActivation } from '../utils/jwtTokenCarePlan.utils';

registersController.post(
  '/',
  verifyToken,
  validateRole,
  validateUser,
  async (req: Request, res: Response) => {
    try {
      /* Logique métier 1 : hashage du password*/
      const defaultPassword = process.env.DEFAULT_PASSWORD!;
      const hashPassword: string = await hashPasswordArgonUtil(defaultPassword);
      req.body.password = hashPassword;

      const origin = req.headers.origin;
      const activationUrl = `${origin}/auth/activation`;
      const result = await createUser(req.body);
      const tokenmail = createJwtaccountActivation(result, req.body.email, activationUrl);
      /* Logique métier 2: envoie mail d'activation*/
      await emailClient.post(
        '/activation',
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenmail}`,
          },
        }
      );
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

export default registersController;
