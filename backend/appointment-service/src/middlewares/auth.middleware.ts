import { MiddlewareFn } from 'type-graphql';
import jwt from 'jsonwebtoken';
import { Context } from '../types/context.type';
import { payloadType } from '../types/payload.type';

export const AuthMiddleware: MiddlewareFn<Context> = async ({ context }, next) => {
  try {
    // Vérifier que la clé secrète existe
    const SECRET_KEY_TOKEN_SERVER = process.env.SECRET_KEY_TOKEN_SERVER;
    if (!SECRET_KEY_TOKEN_SERVER) {
      throw new Error('SECRET_KEY_TOKEN_SERVER is not defined');
    }

    // Récupérer le token depuis le contexte
    if (!context.authorization) {
      throw new Error("Token d'authentification manquant");
    }

    if (!context.authorization.startsWith('Bearer ')) {
      throw new Error('Format de token incorrect');
    }

    const token = context.authorization.replace('Bearer ', '');

    // Vérifier et décoder le token
    const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;

    // Ajouter les informations utilisateur au contexte
    context.user = payload;

    return next();
  } catch (error) {
    throw new Error('Token invalide ou expiré');
  }
};

export const AuthRoleMiddleware = (allowedRoles: number[]): MiddlewareFn<Context> => {
  return async ({ context }, next) => {
    if (!context.user) {
      throw new Error('Utilisateur non authentifié');
    }

    if (!allowedRoles.includes(context.user.role_id)) {
      throw new Error("Accès refusé : vous n'avez pas les permissions nécessaires");
    }

    return next();
  };
};
