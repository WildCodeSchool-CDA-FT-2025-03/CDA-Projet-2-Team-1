// Import général
import express, { Request, Response } from 'express';
import router from './router/router';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

// Récuperation des Cookies
app.use(cookieParser());

app.use(express.json());
app.use('/auth', router);

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
  res.sendStatus(404);
});

/**
 * Le server se lance sur le port 9500
 */
app.listen(9500, () => {
  console.info(`Server lancé sur http://localhost:7000/auth`);
});
