import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { payloadType } from '../types/payload.type';

// Récupération de la clé secrète Server depuis les variables d'environnement
const SECRET_KEY_TOKEN_SERVER: string | undefined = process.env.SECRET_KEY_TOKEN_SERVER;

// Interface pour étendre Request avec le payload utilisateur
interface AuthenticatedRequest extends Request {
  user?: payloadType;
}

function verifyAuthAndRole(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  try {
    // Vérifier que la clé secrète existe
    if (!SECRET_KEY_TOKEN_SERVER) {
      console.error('SECRET_KEY_TOKEN_SERVER is not defined');
      res.status(500).json({ message: 'Erreur de configuration serveur' });
      return;
    }

    // Récupérer le token depuis les cookies
    const token = req.cookies?.jwtTokenServerCarePlan;
    if (!token) {
      res.status(401).json({ message: "Token d'authentification manquant" });
      return;
    }

    // Vérifier et décoder le token
    const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;

    // Vérifier que le role_id est 2 ou 3 (rôles autorisés pour l'upload)
    if (payload.role_id !== 2 && payload.role_id !== 3) {
      res.status(403).json({
        message:
          "Accès refusé : vous n'avez pas les permissions nécessaires pour uploader des fichiers",
      });
      return;
    }

    // Ajouter les informations utilisateur à la requête pour utilisation ultérieure
    req.user = payload;

    // Continuer vers le prochain middleware/contrôleur
    next();
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    res.status(401).json({ message: 'Token invalide ou expiré' });
    return;
  }
}

export default verifyAuthAndRole;
export { AuthenticatedRequest };
