import express from 'express';
import resetPassword from '../controllers/reset.controller';
import checkJWT from '../middlewares/checkJWT.middleware';
import checkPayloadOrigin from '../middlewares/checkPayloadOrigin.middleware';
import errorMiddleware from '../middlewares/errors.middleware';
import accountActivation from '../controllers/accountActivation.controller';

const router = express.Router();

/* Liste des routes ! */
router.post('/reset', checkJWT, checkPayloadOrigin('auth'), resetPassword, errorMiddleware);
router.post('/activation', accountActivation, errorMiddleware);
export default router;
