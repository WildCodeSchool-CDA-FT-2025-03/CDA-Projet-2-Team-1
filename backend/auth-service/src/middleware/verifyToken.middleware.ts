import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import payloadType from '../types/payloadTokenJWT.type';

// Récupération de la clé secrète Server
const SECRET_KEY_TOKEN_SERVER: string | undefined = process.env.SECRET_KEY_TOKEN_SERVER;

function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    if (!SECRET_KEY_TOKEN_SERVER) {
      res.status(500).json({ message: 'Clé secrète manquante' });
      return;
    }

    // Vérification du token
    const token = req.cookies?.jwtTokenServerCarePlan;
    if (!token) {
      res.status(401).json({ message: 'Token manquant' });
      return;
    }

    const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;

    req.body.payload = payload;
    next();
    return;
  } catch (error) {
    res.status(401).json({ message: 'Token invalide ou expiré' });
    return;
  }
}

export default verifyToken;
