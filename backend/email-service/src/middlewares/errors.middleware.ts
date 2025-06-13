import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { HttpError } from '../types/error.type';
import logger from '../services/logger.service';

export default (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.code).json({
      code: err.code,
    });
    logger.error(`${req.method} ${req.get('host') + req.originalUrl}: ${err.message}`);
  } else {
    res.status(500).json({ error: 'Unknown error' });
  }

  next();
};
