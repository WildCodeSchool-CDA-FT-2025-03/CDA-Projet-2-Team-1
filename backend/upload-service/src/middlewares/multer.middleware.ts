import multer from 'multer';

function ToPathFile(file: Express.Multer.File): string {
  const newPathName = `${Date.now()}-${Math.random().toString(16).substring(2, 15)}`;
  const extension = file.originalname.split('.').pop();

  return `${newPathName}.${extension}`;
}

// Configuration du stockage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, ToPathFile(file));
  },
});

const upload = multer({
  storage,
  // Configuration pour gérer l'encodage des noms de fichiers
  fileFilter: (req, file, cb) => {
    // Correction de l'encodage du nom de fichier
    if (file.originalname) {
      try {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
      } catch (error) {
        // Si l'encodage échoue, garder le nom original
        console.warn('Encoding conversion failed, keeping original name');
      }
    }
    cb(null, true);
  },
});

export default upload;
