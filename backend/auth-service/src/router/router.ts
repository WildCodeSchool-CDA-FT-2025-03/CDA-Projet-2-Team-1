import express from 'express';

// Import des controllers
import loginController from '../controllers/loginController';
import RegisterController from '../controllers/RegisterController';

const router = express.Router();

/* Liste des routes ! */
router.use('/login', loginController); // 1 route fonctionnelle
router.use('/register', RegisterController);

export default router;
