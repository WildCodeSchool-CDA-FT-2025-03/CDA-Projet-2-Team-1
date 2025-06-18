import express from 'express';
import resetPassword from './controllers/reset.controller';
import checkJWT from './middlewares/checkJWT.middleware';
import checkPayloadOrigin from './middlewares/checkPayloadOrigin.middleware';
import errorMiddleware from './middlewares/errors.middleware';

import 'dotenv/config';

const app = express();

app.get('/reset', checkJWT, checkPayloadOrigin('auth'), resetPassword, errorMiddleware);

/**
 * Le server se lance sur le port 9501
 */
app.listen(9501, () => {
  console.info(`Server lancé sur http://localhost:9501/email`);
});
