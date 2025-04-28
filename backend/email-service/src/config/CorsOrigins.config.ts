import { ENV } from "./dotenv.config";
import EnvironnementType from "../types/environnement.config.type";

type CorsOriginsType = {
  [key in EnvironnementType]?: string[];
};

function CorsOrigins() {
    const VERIF_DOMAIN_FRONT = process.env.DOMAIN_FRONT
    if (!VERIF_DOMAIN_FRONT) {
        console.error(
            {
                identity: "corsOrigins.config.ts",
                type: "fichier de configuration",
                chemin: "/server/src/config/corsOrigins.config.ts",
                "❌ Nature de l'erreur": `DOMAIN_FRONT introuvable !`,
            }
        );
        process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
    }

    const DOMAIN_FRONT: string = VERIF_DOMAIN_FRONT

    const currentCorsOrigins: CorsOriginsType = {
        development: [
            DOMAIN_FRONT,
            "http://192.168.14.248:4000"
        ],
        production: [
            DOMAIN_FRONT
        ]
    }

    return currentCorsOrigins[ENV]
}

export default CorsOrigins;
