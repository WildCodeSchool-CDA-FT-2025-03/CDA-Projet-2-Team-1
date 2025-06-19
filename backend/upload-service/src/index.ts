import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import path from 'path';
import router from './router';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

// Servir les fichiers statiques
app.use('/files', express.static(path.join(__dirname, '../uploads')));

app.use('/upload', router);

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
