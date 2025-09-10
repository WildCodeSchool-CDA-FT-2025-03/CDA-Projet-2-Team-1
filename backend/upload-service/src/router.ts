import express from 'express';
import path from 'path';
// controllers
import { uploadFile } from './controllers/file.controller';
// middlewares
import upload from './middlewares/multer.middleware';
import verifyAuthAndRole from './middlewares/authRole.middleware';

const router = express.Router();

router.use('/files', express.static(path.join(__dirname, '../uploads')));

router.post('/post', verifyAuthAndRole, upload.single('file'), (req, res) => {
  uploadFile(req, res).catch((err) => {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

export default router;
