import express from "express";

// Import des controllers
import registerController from "../controllers/registerController";

const router = express.Router();

/* Liste des routes ! */
router.use("/register", registerController); // 1 route fonctionnelle

export default router;
