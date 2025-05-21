function ENV(env: string): string {
  try {
    /* Vérification de la syntaxe de la variable d'environnement demandée */
    const env_array: string[] = env.split('.');

    if (
      !env_array ||
      env_array.length !== 3 ||
      env_array[0] !== 'process' ||
      env_array[1] !== 'env'
    ) {
      throw new Error(
        "ENV.config.ts : La syntaxe de la variable d'environnement demandée est incorrecte !"
      );
    }

    /* Récupération de la variable d'environnement */
    const env_verify: unknown = eval(env);

    /* Vérification de la validité de la variable d'environnement */
    /* Si la variable, n'existe pas, n'est pas une string ou est une chaine string vide, renvois une erreur */
    if (!env_verify || typeof env_verify !== 'string' || !env_verify.trim()) {
      throw new Error(
        "ENV.config.ts : La variable d'environnement demandée n'existe pas ou n'est pas valide !"
      );
    }

    /* Return de la variable d'environnement garantie existante et de type string strict */
    return env_verify as string;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Erreur dans ENV.config.ts → ${error.message}`);
      throw new Error("ENV.config.ts : Impossible de charger la variable d'environnement : " + env);
    }

    // Par sécurité si ce n’est pas une Error instance
    throw new Error('ENV.config.ts : Une erreur inconnue est survenue.');
  }
}

export default ENV;
