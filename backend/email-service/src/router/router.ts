import express from 'express';
import resetPassword from '../controllers/reset.controller';
import checkJWT from '../middlewares/checkJWT.middleware';
import checkPayloadOrigin from '../middlewares/checkPayloadOrigin.middleware';
import errorMiddleware from '../middlewares/errors.middleware';

const router = express.Router();

/* Liste des routes ! */
router.get('/reset', checkJWT, checkPayloadOrigin('auth'), resetPassword, errorMiddleware);

export default router;
