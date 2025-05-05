import express from "express";

// Import des controllers
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";

const router = express.Router();

/* Liste des routes ! */
router.use("/register", registerController); // 1 route fonctionnelle
router.use("/login", loginController); // 1 route fonctionnelle

export default router;
