import express from 'express';

// Import des controllers
import loginController from '../controllers/loginController';
import registersController from '../controllers/registersController';

const router = express.Router();

/* Liste des routes ! */
router.use('/login', loginController); // 1 route fonctionnelle
router.use('/register', registersController);

export default router;
