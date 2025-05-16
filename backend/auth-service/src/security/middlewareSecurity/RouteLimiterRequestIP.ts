import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware pour limiter les tentatives de connexion sur `/login`
 */
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // ⏳ Fenêtre de 5 minutes
  max: 10, // 🔥 Maximum 10 tentatives par IP dans la fenêtre
  standardHeaders: true, // 🔥 Active `RateLimit-Limit`, `RateLimit-Remaining`
  legacyHeaders: false, // ❌ Désactive les anciens headers `X-RateLimit`
  message: { reponse: 'Trop de tentatives de connexion. Réessayez dans 5 minutes.' },
  handler: (req: Request, res: Response) => {
    res.set('Retry-After', String(5 * 60)); // ⏳ Ajoute `Retry-After: 300` (5 min)
    res.status(429).json({
      reponse: 'Trop de tentatives de connexion. Réessayez dans 5 minutes.',
      retryAfter: '5 minutes',
    });

    console.error({
      identity: 'RouteLimiterRequestIP.ts',
      type: 'middleware',
      chemin: '/server/src/Security/middlewareSecurity/RouteLimiterRequestIP.ts',
      "❌ Nature de l'erreur": "L'IP a dépassé la limite de tentatives de connexion",
      ip: req.ip,
      route: req.originalUrl,
    });

    return; // ✅ Stoppe l'exécution ici pour éviter `next()`
  },
});

/**
 * Middleware avec `try/catch` pour capturer d'éventuelles erreurs
 */
async function RouteLimiterRequestIP(req: Request, res: Response, next: NextFunction) {
  try {
    await limiter(req, res, next); // 🔥 Exécute `rateLimit`
  } catch (error) {
    res.status(500).json({ error: 'Erreur interne serveur.' });
    console.error({
      identity: 'RouteLimiterRequestIP.ts',
      type: 'middleware',
      chemin: '/server/src/Security/middlewareSecurity/RouteLimiterRequestIP.ts',
      "❌ Nature de l'erreur": 'Erreur dans le middleware de limitation de connexion',
      details: error,
    });

    return; // ✅ Stoppe bien l'exécution après une erreur
  }
}

export default RouteLimiterRequestIP;
