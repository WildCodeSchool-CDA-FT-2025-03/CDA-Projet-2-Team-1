import chalk from 'chalk';

/**
 * Cette fonction a pour objectif de :
 * - Récupérer la variable d'environnement demandée
 * - Vérifier si elle est définie
 * - Si elle n'est pas définie, afficher un message d'erreur et ou arrêter le serveur
 * - Si elle est définie, la retourner en valeur stricte sans undefined
 */

// Déclaration des tableaux avec const assertions
const valeurCritical = [
  'Critical',
  'critical',
  'Critique',
  'critique',
  '1',
  1,
  'Haut',
  'haut',
] as const;
const valeurWarning = [
  'Warning',
  'warning',
  'Avertissement',
  'avertissement',
  '2',
  2,
  'Moyen',
  'moyen',
  'Faible',
  'faible',
  'Bas',
  'bas',
] as const;

// Types automatiquement dérivés des tableaux
type ValeurCritical = (typeof valeurCritical)[number]; // [number] car référence à l'index du tableau qui se définit par un number
type ValeurWarning = (typeof valeurWarning)[number];
type NiveauErreur = ValeurCritical | ValeurWarning | undefined;

type ParamsType = {
  env: string;
  lvl?: NiveauErreur;
};

function ENV(env: ParamsType['env'], lvl?: ParamsType['lvl']) {
  // Vérification du type d'erreur (Warning ou Critical ?)
  let lvl_verify: ParamsType['lvl'] = lvl;

  if (valeurWarning.includes(lvl as ValeurWarning) || !lvl) {
    lvl_verify = 'Warning';
  }
  if (valeurCritical.includes(lvl as ValeurCritical)) {
    lvl_verify = 'Critical';
  }

  // Vérification : env existe t-il ?
  if (!env || typeof env !== 'string' || !env.trim()) {
    if (lvl_verify === 'Warning') {
      console.error(chalk.bold.yellow(`Erreur Warning...`));
      console.error(chalk.yellow(`identity : verifEnv.config.ts`));
      console.error(chalk.yellow(`type : fichier de configuration`));
      console.error(chalk.yellow(`chemin : /server/src/config/verifEnv.config.ts`));
      console.error(
        chalk.yellow(`❌ Nature de l'erreur : Erreur d'utilisation de la fonction ENV`)
      );
      console.error(
        chalk.yellow(`❌ Nature de l'erreur : Aucune variable d'environnement n'a été demandée !`)
      );
      console.error(chalk.bold.yellow(`${'⚠️ '} Utilisation : ENV("process.env.NOM_VARIABLE")`));
      return 'Error';
    }
    if (lvl_verify === 'Critical') {
      console.error(chalk.bold.red(`Erreur Critical...`));
      console.error(chalk.red(`identity : verifEnv.config.ts`));
      console.error(chalk.red(`type : fichier de configuration`));
      console.error(chalk.red(`chemin : /server/src/config/verifEnv.config.ts`));
      console.error(chalk.red(`❌ Nature de l'erreur : Erreur d'utilisation de la fonction ENV`));
      console.error(
        chalk.red(`❌ Nature de l'erreur : Aucune variable d'environnement n'a été demandée !`)
      );
      console.error(chalk.bold.red(`${'⚠️ '} Utilisation : ENV("process.env.NOM_VARIABLE")`));
      console.error(chalk.bold.red(`${'⚠️ '} Arret du serveur !`));
      process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
    }
  }

  // Vérification de la syntaxe de la variable d'environnement demandée
  const env_array: string[] = env.split('.');

  if (!env_array || env_array?.length < 2 || env_array[0] !== 'process' || env_array[1] !== 'env') {
    if (lvl_verify === 'Warning') {
      console.error(chalk.bold.yellow(`Erreur Warning...`));
      console.error(chalk.yellow(`identity : verifEnv.config.ts`));
      console.error(chalk.yellow(`type : fichier de configuration`));
      console.error(chalk.yellow(`chemin : /server/src/config/verifEnv.config.ts`));
      console.error(
        chalk.yellow(`❌ Nature de l'erreur : Erreur d'utilisation de la fonction ENV`)
      );
      console.error(
        chalk.yellow(
          `❌ Nature de l'erreur : La syntaxe de la variable d'environnement demandée n'est pas valide !`
        )
      );
      console.error(chalk.bold.yellow(`${'⚠️ '} Utilisation : ENV("process.env.NOM_VARIABLE")`));
      return 'Error';
    }
    if (lvl_verify === 'Critical') {
      console.error(chalk.bold.red(`Erreur Critical...`));
      console.error(chalk.red(`identity : verifEnv.config.ts`));
      console.error(chalk.red(`type : fichier de configuration`));
      console.error(chalk.red(`chemin : /server/src/config/verifEnv.config.ts`));
      console.error(chalk.red(`❌ Nature de l'erreur : Erreur d'utilisation de la fonction ENV`));
      console.error(
        chalk.red(
          `❌ Nature de l'erreur : La syntaxe de la variable d'environnement demandée n'est pas valide !`
        )
      );
      console.error(chalk.bold.red(`${'⚠️ '} Utilisation : ENV("process.env.NOM_VARIABLE")`));
      console.error(chalk.bold.red(`${'⚠️ '} Arret du serveur !`));
      process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
    }
  }

  // Récupération de la variable d'environnement demandée
  const env_verify = env_array.reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, globalThis) as string | undefined;

  // Logique principale :
  if (typeof env_verify !== 'string') {
    if (lvl_verify === 'Warning') {
      console.error(chalk.bold.yellow(`Erreur Warning...`));
      console.error(chalk.yellow(`identity : verifEnv.config.ts`));
      console.error(chalk.yellow(`type : fichier de configuration`));
      console.error(chalk.yellow(`chemin : /server/src/config/verifEnv.config.ts`));
      console.error(
        chalk.yellow(`❌ Nature de l'erreur : La variable d'environnement ${env} n'existe pas !`)
      );
      console.error(
        chalk.bold.yellow(
          `${'⚠️ '} Conseil : Vérifiez si vous ne vous êtes pas trompé dans le nom de la variable !`
        )
      );
      console.error(
        chalk.bold.yellow(
          `${'⚠️ '} Conseil : Vérifiez si vous avez bien défini la variable dans un fichier .env !`
        )
      );
      return 'Error';
    }
    if (lvl_verify === 'Critical') {
      console.error(chalk.bold.red(`Erreur Critical...`));
      console.error(chalk.red(`identity : verifEnv.config.ts`));
      console.error(chalk.red(`type : fichier de configuration`));
      console.error(chalk.red(`chemin : /server/src/config/verifEnv.config.ts`));
      console.error(
        chalk.red(`❌ Nature de l'erreur : La variable d'environnement ${env} n'existe pas !`)
      );
      console.error(chalk.bold.red(`${'⚠️ '} Arret du serveur !`));
      process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
    }
  }

  return env_verify; // Retourne la valeur de l'environnement sans undefined
}

export default ENV;
