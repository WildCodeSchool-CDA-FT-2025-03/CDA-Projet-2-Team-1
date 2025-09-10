import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import router from './router';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', router);

/**
 * Gestion des routes innexistante
 */
app.use(async (req, res) => {
  res.sendStatus(404);
});

const PORT = process.env.UPLOAD_SERVICE_PORT || 5000;

app.listen(PORT, () => {
  console.info(`✅ Upload service is running on port ${PORT}`);
});
