import { Request, Response, NextFunction } from 'express';
import payloadType from '../../types/payloadTokenJWT.type';

function validateRole(req: Request, res: Response, next: NextFunction) {
  try {
    const token: payloadType = req.body.payload;

    if (token.role_id !== 1) {
      res.status(403).json({ message: 'Accès refusé : administrateur requis' });
      return;
    }

    next(); // continuer si admin
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne du serveur' });
    return;
  }
}

export default validateRole;
