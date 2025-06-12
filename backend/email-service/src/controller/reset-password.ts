import { Request, Response } from 'express';

async function resetPassword(req: Request, res: Response) {
  res.status(200).json({ result: true });
}

export default resetPassword;
