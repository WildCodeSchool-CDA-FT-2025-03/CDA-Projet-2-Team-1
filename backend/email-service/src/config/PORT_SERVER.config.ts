import { ENV } from "./dotenv.config";

/**
 * Vérification de la variable d'environnement PORT_SERVER
 */

function Port_Server() {
    const port: string | undefined = process.env.PORT_SERVER;
    if (port === undefined) {

        let ENV_ERROR: string = "";
        
        if (ENV === "production") {
            ENV_ERROR = "docker.root";
        }
        else {
            ENV_ERROR = ENV;
        }
        console.error(
            {
                identity: "port.config.ts",
                type: "fichier de configuration",
                chemin: "/server/src/config/port.config.ts",
                "❌ Nature de l'erreur": `La variable PORT_SERVER est non définie. Le serveur ne peut pas démarrer sans cette variable !`,
                "⚠️ Vérifiez que le fichier" :`.env.${ENV_ERROR} existe et contient la variable PORT_SERVER !`,
            }
        );
        process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
    }
    return port;
}

export default Port_Server;
