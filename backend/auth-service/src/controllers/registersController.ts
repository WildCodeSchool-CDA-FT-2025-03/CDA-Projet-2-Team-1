import express, { Request, Response } from 'express';
const registersController = express.Router();

//import des middlewares
import verifyToken from '../middleware/verifyToken.middleware';
import validateRole from '../middleware/VerifyKeys/validateRoleQuery.middleware';
import validateUser from '../middleware/VerifyKeys/validateFields.middleware';

/* import des utils */
import { hashPasswordArgonUtil } from '../utils/Argon.utils';
//import { createUser } from '../repository/user.repository';
//import { UserInput } from '../types/userTable.type';

/* import des types */

registersController.post(
  '/',
  verifyToken,
  validateRole,
  validateUser,
  async (req: Request, res: Response) => {
    try {
      /* Logique métier 1 : Récupération token cookie et décodage du contenue */
      const hashPassword: string = await hashPasswordArgonUtil(req.body.password);
      req.body.password = hashPassword;

      /**
       * firstname
       * lastname
       * email
       * hash
       * gender
       * role_id
       * service_id
       */
      //console.log('Controller register', req.body);
      // appel la fonction createUser et que transmette les infos
      //const newUser: UserInput | null = await createUser(req.body);
      //console.log('Controller register result', newUser);
      /* Logique métier 2 : Décodage du token */
      res.status(200).json({ message: 'test' });
    } catch (error) {
      //console.log('register error', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);
// jwttokenservercareplan=

export default registersController;
