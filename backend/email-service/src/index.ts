import express from 'express';
import logger from './services/logger.service';
import router from './router/router';

import 'dotenv/config';

const app = express();

app.use('/', router);

/**
 * Le server se lance sur le port 9501
 */
app.listen(9501, () => {
  logger.info(`Server lancé sur http://localhost:9501/email`);
});
