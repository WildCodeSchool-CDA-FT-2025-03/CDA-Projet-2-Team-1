import { Request, Response, NextFunction } from 'express';

// Utilisation :
// import VerifyKeys from "./middleware/VerifyKeys";
// VerifyKeys(["motclé1", "motclé2"])

// On peut mettre autant de mot clé que necessaire

function VerifyKeys(requiredKeys: string[]) {
  return function ControleKeys(req: Request, res: Response, next: NextFunction) {
    const missingKeys = requiredKeys.filter((key) => !req.body[key]);

    if (missingKeys.length > 0) {
      res.status(400).json({ reponse: 'La syntaxe de la requête est erronée.' });
      return;
    }

    next();
  };
}

export default VerifyKeys;
