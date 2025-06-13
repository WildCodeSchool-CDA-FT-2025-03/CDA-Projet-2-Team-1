import express from 'express';

const router = express.Router();

router.get('/upload', (req, res) => {
  console.info(req.body);
  res.send('Hello World');
});

export default router;
