import express, { Request, Response } from 'express';

const loginController = express.Router();

// Import des dépendances externes :

// Import des Middlewares :
import validateLoginQuery from '../middleware/VerifyKeys/validateLoginQuery.middleware';

// Import des Repositories :
import { verifyUserByEmail } from '../repository/user.repository';

// Import des Types :
import { type UserType } from '../types/userTable.type';

// Import des utils
import { verifyPasswordArgonUtils } from '../utils/Argon.utils';
import { createJwtTokenServerCarePlan } from '../utils/jwtTokenCarePlan.utils';
import { createDateNumberUtils } from '../utils/createDateUtils';

// URI : /auth/login
loginController.post(
  '/',

  // Vérification :
  validateLoginQuery,

  async (req: Request, res: Response) => {
    try {
      /* Logique métier 1 : Vérification si l'email existe */
      const dataUser: UserType | null = await verifyUserByEmail(req.body.email);

      if (dataUser === null) {
        res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        return;
      }

      /* Logique métier 2 : Vérification si le compte est activé */
      if (dataUser.is_active === false) {
        res.status(401).json({ message: 'Compte désactivé' });
        return;
      }

      /* Logique métier 3 : Vérifier le mot de passe utilisateur */
      const verifyPassword: boolean = await verifyPasswordArgonUtils(
        dataUser.password,
        req.body.password
      );

      if (!verifyPassword) {
        // Si c'est false, c'est que le mot de passe est incorrect
        res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        return;
      }

      /* Logique métier 4 : Création du JWT client et server */

      // Création du token server
      const jwtTokenServerCarePlan: string = await createJwtTokenServerCarePlan(dataUser);

      // Vérification des clés secrète Server et Client si elles existent
      // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
      if (jwtTokenServerCarePlan === 'Error') {
        res.status(500).json({ message: 'Erreur interne serveur.' });
        return;
      }

      /* Logique métier 5 : Création d'une variable d'expiratation */
      const dateNow: number = await createDateNumberUtils(); // Date actuelle en timestamp UNIX
      const exp = dateNow + 60 * 60 * 1000; // ajoute 1h en ms

      /* Logique métier 6 : Réponse au client */
      res
        .status(200)
        .cookie('jwtTokenServerCarePlan', jwtTokenServerCarePlan, {
          httpOnly: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 1000, // 1 heure
        })
        .json({
          message: 'Connexion réussie',
          data: {
            role_id: dataUser.role_id,
            service_id: dataUser.service_id,
            created_at: dataUser.created_at,
            exp: exp,
          },
        });
      return;
    } catch (error) {
      res.status(500).json({ message: 'Erreur interne serveur.' });
      return;
    }
  }
);

export default loginController;
