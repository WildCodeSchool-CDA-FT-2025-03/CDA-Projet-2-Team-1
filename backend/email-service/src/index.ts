import express from 'express';

const app = express();

/**
 * Le server se lance sur le port 9501
 */
app.listen(9501, () => {
  console.info(`Server lancé sur http://localhost:9501/email`);
});
