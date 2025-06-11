import express, { Request, Response } from 'express';
const registersController = express.Router();

//import des middlewares
import verifyToken from '../middleware/verifyToken.middleware';
import validateRole from '../middleware/VerifyKeys/validateRoleQuery.middleware';
import validateFieldsQuery from '../middleware/VerifyKeys/validateFields.middleware';

/* import des utils */

/* import des types */

registersController.post(
  '/',
  verifyToken,
  validateRole,
  validateFieldsQuery,
  async (req: Request, res: Response) => {
    try {
      /* Logique métier 1 : Récupération token cookie et décodage du contenue */

      /* Logique métier 2 : Décodage du token */

      res.status(200).json({ message: 'test' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);
// jwttokenservercareplan=

export default registersController;
