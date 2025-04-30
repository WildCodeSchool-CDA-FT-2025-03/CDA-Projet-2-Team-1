import express from "express";

// Import des controllers
import registerController from "../controllers/registerController";

const router = express.Router();

/* Liste des routes ! */
router.post("/register", registerController); // Route pour l'inscription d'un utilisateur

export default router;
