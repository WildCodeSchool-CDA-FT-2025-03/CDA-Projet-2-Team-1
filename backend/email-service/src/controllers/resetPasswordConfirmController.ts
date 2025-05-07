import express, {Request, Response} from 'express';

const resetPasswordConfirmController = express.Router();

// Import des dépendances externes :
import { ResultSetHeader, RowDataPacket } from 'mysql2';

// Import des Middlewares :
import RouteLimiterRequestIP from '../security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import { getOneTokenResetRepository, deletOneTokenResetRepository } from '../repository/resetTokenRegulator';
import { getOneUserByIdRepository } from '../repository/getUserRepository';

// Import des Services :
import sendMailerService from '../services/mailer/sendMailerService';

// Import des Types :

// Import des Outils :
import { hashPasswordArgonUtils } from '../utils/hashArgonUtils';
import updateNewPasswordUserRepository from '../repository/updateNewPasswordUserRepository';

// Vérification :
// URI : /api/resetpassword/confirm
resetPasswordConfirmController.post("/",

    // Vérification :
    RouteLimiterRequestIP,
    VerifyKeys(["token", "newPassword"]),
    
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Récupération et vérification du token dans la DB
                const tokenDB: RowDataPacket[] =  await getOneTokenResetRepository(req.body.token);

                // Vérification si le token existe en DB
                if (tokenDB.length === 0) {
                    res.status(403).json({ error: "Token invalide." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 1",
                            codeStatus: "403 : Forbidden",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération des tokens dans la DB.",
                            getOneTokenResetRepository: {
                                identity: "getOneTokenResetRepository",
                                type: "repository",
                                chemin: "/server/src/repository/resetTokenRegulator.ts",
                                "❌ Nature de l'erreur": "Le token n'existe pas dans la DB, accès refusé.",
                            },
                        }
                    );
                    return;
                }

                // Création des variables pour faire la comparaison de date
                const dateNow: Date = new Date();
                const dateToken: Date = new Date(tokenDB[0].expires_at);

                // Vérification si le token est expiré
                if (dateNow > dateToken) {
                    res.status(403).json({ error: "Token expiré." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 1",
                            codeStatus: "403 : Forbidden",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération des tokens dans la DB.",
                        }
                    );
                    return;
                }

            // Logique métier 2 : Récupération de l'utilisateur en DB
                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(tokenDB[0].user_id);

                // Vérification si l'utilisateur existe en DB ou que la requête a fonctionné
                if (dataUser.length === 0) {
                    res.status(404).json({ error: "Utilisateur introuvable." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 2",
                            codeStatus: "404 : Not Found",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération de l'utilisateur dans la DB.",
                            getOneUserByIdRepository: {
                                identity: "getOneUserByIdRepository",
                                type: "repository",
                                chemin: "/server/src/repository/getUserRepository.ts",
                                "❌ Nature de l'erreur": "La DB n'a rien retourné.",
                                cause1: "L'utilisateur n'existe pas.",
                                cause2: "L'utilisateur a été supprimé.",
                                cause3: "La requête a échoué.",
                            },
                        }
                    );
                    return;
                }

            // Logique métier 3 : Hachage du nouveau mot de passe utilisateur
                const hash: string = await hashPasswordArgonUtils(req.body.newPassword);

            // Logique métier 4 : Enregistrement du nouveau mot de passe dans la DB
                const updatePassword: ResultSetHeader = await updateNewPasswordUserRepository(dataUser[0].id, hash);

                // Vérification si le mot de passe a bien été mis à jour
                if (updatePassword.affectedRows === 0) {
                    res.status(500).json({ error: "Erreur lors de la mise à jour du mot de passe." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 4",
                            codeStatus: "500 : Internal Server Error",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la mise à jour du mot de passe.",
                        }
                    );
                    return;
                }
        
            // Logique métier 5 : Suppression du token dans la DB
                const deleteToken: number = await deletOneTokenResetRepository(req.body.token);

                // Vérification si le token a bien été supprimé
                if (deleteToken === 0) {
                    res.status(500).json({ error: "Erreur lors de la suppression du token." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 5",
                            codeStatus: "500 : Internal Server Error",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la suppression du token.",
                            deletOneTokenResetRepository: {
                                identity: "deletOneTokenResetRepository",
                                type: "repository",
                                chemin: "/server/src/repository/resetTokenRegulator.ts",
                                "❌ Nature de l'erreur": "Erreur lors de la suppression du token.",
                            },
                        }
                    );
                    return;
                }

            // Logique métier 6 : Envoi d'un email de confirmation à l'utilisateur
                try {
                    const mailOptions = {
                        to: dataUser[0].email,
                        subject: "Confirmation de réinitialisation de mot de passe",
                        html: `
                            <h1>Réinitialisation de mot de passe</h1>
                            <p>Bonjour ${dataUser[0].firstname},</p>
                            <p>Votre mot de passe a été réinitialisé avec succès.</p>
                            <p>Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre support.</p>
                            <p>Cordialement,</p>
                            <p>L'Atelier Photo Montpellier</p>
                            `,
                    };

                    await sendMailerService(mailOptions);
                }
                catch (error) {
                    res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
                    const sendMailerServiceError = (error as Error).message; // On récupère le message d'erreur de la fonction sendMailerService
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 6",
                            codeStatus: "500 : Internal Server Error",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de l'envoi de l'email.",
                            sendMailerService: {
                                identity: "sendMailerService",
                                type: "service",
                                chemin: "/server/src/services/mailer/sendMailerService.ts",
                                "❌ Nature de l'erreur": sendMailerServiceError,
                            },
                        }
                    );
                    return;
                }
            
            // Logique métier 7 : Envoi de la réponse au client
                res.status(200).json({ message: "Mot de passe réinitialisé avec succès." });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne du serveur." });
            console.error(
                {
                    identity: "resetPasswordConfirmController.ts",
                    type: "controller",
                    URI: "/api/resetpassword/confirm",
                    methode: "POST",
                    codeStatus: "500 : Internal Server Error",
                    chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                    "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                    details: error,
                }
            );
        }
    });

export default resetPasswordConfirmController;
