import express from 'express';

// Import des controllers
import loginController from '../controllers/loginController';
import resetController from '../controllers/resetController';

const router = express.Router();

/* Liste des routes ! */
router.use('/login', loginController); // 1 route fonctionnelle
router.use('/reset', resetController);

export default router;
