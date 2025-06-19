import express from 'express';
// controllers
import { uploadFile } from './controllers/file.controller';
// middlewares
import upload from './middlewares/multer.middleware';

const router = express.Router();

router.get('/get', (req, res) => {
  res.send('Hello World GET ROUTE');
});

router.post('/post', upload.single('file'), (req, res) => {
  uploadFile(req, res).catch((err) => {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

export default router;
