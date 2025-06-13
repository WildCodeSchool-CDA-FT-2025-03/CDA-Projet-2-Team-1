import express, { Request, Response } from 'express';
const registersController = express.Router();

//import des middlewares
import verifyToken from '../middleware/verifyToken.middleware';
import validateRole from '../middleware/VerifyKeys/validateRoleQuery.middleware';
import validateUser from '../middleware/VerifyKeys/validateUser.middleware';

/* import des utils */
import { hashPasswordArgonUtil } from '../utils/Argon.utils';
import { createUser } from '../repository/user.repository';

/* import des types */

registersController.post(
  '/',
  verifyToken,
  validateRole,
  validateUser,
  async (req: Request, res: Response) => {
    try {
      /* Logique métier 1 : hashage du password*/
      const hashPassword: string = await hashPasswordArgonUtil(req.body.password);
      req.body.password = hashPassword;

      const newUser = await createUser(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

export default registersController;
