import { Request, Response, NextFunction } from 'express';

function validateRole(req: Request, res: Response, next: NextFunction) {
  try {
    const Role: number = req.body.role_id;

    if (!Role) {
      res.status(401).json({ message: 'Non authentifié' });
      return;
    }

    if (Role !== 1) {
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
