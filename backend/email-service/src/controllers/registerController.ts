import express, { request, response } from 'express';

const registerController = express.Router();

// Import des dépendances externes :
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from 'mysql2';

// Import des Middlewares :
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import verifyEmailFalseRepository from "../repository/emailRepository";
import InsertUserRepository from "../repository/insertUserRepository";

// Impot des Outils :
import { hashPasswordArgonUtils } from '../utils/hashArgonUtils';

// URI : /api/register
registerController.post("/", 

    // Vérification : 
    RouteLimiterRequestIP,
    VerifyKeys(["firstname", "lastname", "email", "password"]),
    
    async (req, res) => {
        try {
            /* Logique métier 1 : Vérification si l'email existe */
                const dataUser: RowDataPacket[] = await verifyEmailFalseRepository(req.body.email);
                // Si l'email existe déjà dans la DB, on ne peut pas continuer.
                if (dataUser.length > 0) { // Si c'est supérieur à 0, c'est que l'email existe déjà
                    res.status(409).json({ message: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
                    console.error(
                        {
                            identity: "registerController.ts",
                            type: "controller",
                            URI: "/api/register",
                            methode: "POST",
                            metier: "Logique métier 1",
                            codeStatus: "409 : Conflict",
                            chemin: "/server/src/middleware/VerifyEmail/VerifyEmailFalse.ts",
                            "❌ Nature de l'erreur": "L'email existe déjà dans la DB, impossible de continuer.",
                        },
                    );
                    return;
                }

            /* Logique métier 2 : Hachage du mot de passe du nouvelle utilisateur */
                // On hache le mot de passe avant de l'insérer dans la DB
                const hash: string = await hashPasswordArgonUtils(req.body.password);

                // On remplace le mot de passe en clair par le mot de passe haché
                req.body.password = hash;

            /* Logique métier 3 : Insertion de l'utilisateur dans la DB */
                // On insère l'utilisateur dans la DB
                const insertUser: ResultSetHeader = await InsertUserRepository
                (req.body.firstname, req.body.lastname, req.body.adress?? null, req.body.email, req.body.password);

                if (insertUser.affectedRows === 0) {
                    res.status(400).json({ message: "Erreur lors de l'enregistrement de l'utilisateur." });
                    console.error(
                        {
                            identity: "registerController.ts",
                            type: "controller",
                            URI: "/api/register",
                            methode: "POST",
                            metier: "Logique métier 3",
                            codeStatus: "400 : Bad Request",
                            chemin: "/server/src/middleware/InsertDB/InsertUser.ts",
                            "❌ Nature de l'erreur": "Erreur lors de l'enregistrement de l'utilisateur dans la DB.",
                        },
                    );
                    return;
                }

            /* Logique métier 4 : Réponse de succès */
                res.status(201).json({ message: "Enregistrement accepté." });
                return;
        }
        catch (error) {
            res.status(500).json({ message: "Erreur interne serveur." });
            console.error(
                {
                    identity: "registerController.ts",
                    type: "controller",
                    URI: "/api/register",
                    methode: "POST",
                    codeStatus: "500 : Internal Server Error",
                    chemin: "/server/src/controllers/registerController.ts",
                    "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                    details: error,
                },
            );
            return;
        }
    });

export default registerController;
