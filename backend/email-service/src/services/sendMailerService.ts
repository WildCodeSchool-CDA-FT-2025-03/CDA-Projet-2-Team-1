import transporter from "./mailer";
import MailOptionsType from "../types/mailOptionsType";
import { SentMessageInfo } from "nodemailer/lib/sendmail-transport";
import ENV from "../config/ENV.config";

/* Cette fonction doit être appelé dans un try catch pour la gestion des erreur */

async function sendMailerService(mailOptions: MailOptionsType): Promise<SentMessageInfo> {
    try {
        // Récupération de l'email de l'expéditeur depuis les variables d'environnement
        const MAIL_SERVER_ADMIN: string = ENV("process.env.MAIL_SERVER_ADMIN", "warning");

        //Vérification de la présence de l'email de l'expéditeur
        if (MAIL_SERVER_ADMIN === "Error") {
            throw new Error("Erreur : l'email de l'expéditeur (MAIL_SERVER_ADMIN) est manquant dans les variables d'environnement.");
        }

        // Création d'un filtre pour les options de mail a envoyer a nodeMailer
        const filterMailOption: MailOptionsType = {
            from: mailOptions.from || `CarePlan <${MAIL_SERVER_ADMIN}>`, // Si le champ 'from' est absent, on utilise l'email de l'expéditeur
            to: mailOptions.to,
            subject: mailOptions.subject,
        }

        // Vérification si les champs 'to' et 'subject' sont présents
        if (mailOptions.text) {
            filterMailOption.text = mailOptions.text;
        }
        else if (mailOptions.html) {
            filterMailOption.html = mailOptions.html;
        }
        else {
            throw new Error("Erreur: les champs 'text' et 'html' sont absents.");
        }

        const sendMailer: SentMessageInfo = await transporter.sendMail(filterMailOption);
        return sendMailer;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
}

export default sendMailerService;
