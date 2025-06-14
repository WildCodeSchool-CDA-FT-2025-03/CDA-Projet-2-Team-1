import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { HttpError } from '../types/error.type';

export default function checkJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!process.env.SECRET_KEY_TOKEN_SERVER) {
    throw new HttpError(500, 'Missing secret serverkey');
  }
  if (!token) {
    throw new HttpError(401, 'Unauthorized, token missing');
  }

  try {
    const payload = verify(token, process.env.SECRET_KEY_TOKEN_SERVER) as JwtPayload;
    delete payload['iat'];
    delete payload['exp'];
    res.locals = { payload };
  } catch (error) {
    throw new HttpError(401, 'Unauthorized, error verify');
  }

  next();
}
