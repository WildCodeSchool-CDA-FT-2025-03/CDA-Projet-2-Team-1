import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import payloadType from '../types/payloadTokenJWT.type';

// Récupération de la clé secrète Server
const SECRET_KEY_TOKEN_SERVER: string | undefined = process.env.SECRET_KEY_TOKEN_SERVER;

function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    if (!SECRET_KEY_TOKEN_SERVER) {
      res.status(500);
      return;
    }

    // Vérification du token
    const token = req.cookies?.jwtTokenServerCarePlan;
    if (!token) {
      res.sendStatus(401);
      return;
    }

    // Vérification du token avec la clé secrète
    const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;

    // Créer une nouvelle propriété dans la requête pour stocker le payload
    req.body.payload = payload;

    next();
    return;
  } catch (error) {
    res.status(401);
    return;
  }
}

export default verifyToken;
