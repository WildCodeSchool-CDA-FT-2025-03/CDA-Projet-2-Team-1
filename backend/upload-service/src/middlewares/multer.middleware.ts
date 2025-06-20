import multer from 'multer';

function ToPathFile(file: Express.Multer.File): string {
  const newPathName = Buffer.from(`${Date.now()}-${file.originalname}`).toString('hex');
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

const upload = multer({ storage });

export default upload;
