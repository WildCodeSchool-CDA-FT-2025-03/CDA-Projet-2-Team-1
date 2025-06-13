import express from 'express';
import resetPassword from './controllers/reset-password';
import checkJWT from './middlewares/checkJWT.middleware';
import errorMiddleware from './middlewares/errors.middleware';

import 'dotenv/config';

const app = express();

app.use('/reset', checkJWT, resetPassword, errorMiddleware);

/**
 * Le server se lance sur le port 9501
 */
app.listen(9501, () => {
  console.info(`Server lancé sur http://localhost:9501/email`);
});
