import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function checkJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!process.env.SECRET_KEY_TOKEN_SERVER) {
    throw new Error('Missing secret key');
  }
  if (!token) {
    throw new Error('Unauthorized');
  }

  try {
    const payload = verify(token, process.env.SECRET_KEY_TOKEN_SERVER);
    res.locals = { payload };
  } catch (error) {
    throw new Error('Invalid token');
  }

  next();
}
