import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../types/error.type';

export default function checkPayloadOrigin(origin: string) {
  return (_req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = res.locals.payload;
      if (!payload || payload.serviceOrigin !== origin) {
        throw new HttpError(401, 'Unauthorized, origin mismatch');
      }
    } catch (error) {
      throw new HttpError(401, 'Unauthorized, error');
    }

    next();
  };
}
