import express, { Request, Response } from 'express';
const registersController = express.Router();

//import des middlewares
import verifyToken from '../middleware/verifyToken.middleware';
import validateRole from '../middleware/VerifyKeys/validateRoleQuery.middleware';
import validateUser from '../middleware/VerifyKeys/validateUser.middleware';

/* import des utils */
import { hashPasswordArgonUtil } from '../utils/Argon.utils';

/* import des repository */
import { createUser } from '../repository/user.repository';

registersController.post(
  '/',
  verifyToken,
  validateRole,
  validateUser,
  async (req: Request, res: Response) => {
    try {
      /* Logique métier 1 : hashage du password*/
      const hashPassword: string = await hashPasswordArgonUtil('ABC123pass');
      req.body.password = hashPassword;

      await createUser(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

export default registersController;
