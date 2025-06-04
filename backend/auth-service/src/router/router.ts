import express from 'express';

// Import des controllers
import loginController from '../controllers/loginController';

const router = express.Router();

/* Liste des routes ! */
router.use('/login', loginController); // 1 route fonctionnelle

export default router;
