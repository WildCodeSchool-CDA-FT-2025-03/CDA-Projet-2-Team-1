import { Request, Response, NextFunction } from 'express';

const validateRole = (req: Request, res: Response, next: NextFunction) => {
  const Role = req.body.role_id;

  if (!Role) {
    return res.status(401).json({ message: 'Non authentifié' });
  }

  if (Role.role_id !== 1) {
    return res.status(403).json({ message: 'Accès refusé : administrateur requis' });
  }

  next(); // continuer si admin
};

export default validateRole;
