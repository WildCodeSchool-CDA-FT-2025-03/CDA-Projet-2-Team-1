// Import général
import './config/dotenv.config';
import express, { Request, Response } from 'express';
import router from './router/router';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
const port = process.env.VITE_PORT_AUTH_SERVICE || '9500';

app.use(
  cors({
    origin: process.env.DOMAIN_FRONT,
    credentials: true,
  })
);

app.use(express.json());
app.use('/api', router);

/**
 * Route de base
 * Path: /
 * Action callBack
 * Methode: GET
 */
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('API CarePlan');
});

/**
 * Gestion des routes innexistante
 */
app.use(async (req: Request, res: Response) => {
  res
    .status(404)
    .json({
      success: false,
      message: 'Route non trouvée',
      method: req.method,
      path: req.originalUrl,
    });
  console.error(`Route innexistante : ${req.method} ${req.originalUrl}`);
});

/**
 * Le server se lance sur le port 9500
 */
app.listen(port, () => {
  console.info(chalk.cyan(`Server lancé sur ${process.env.VITE_DOMAIN_AUTH_SERVICE}`));
});
