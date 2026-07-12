import express from 'express';
import cors from 'cors';
import multer from 'multer';
const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });
app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.post('/analyze', upload.single('image'), (_, res) => res.json({ status: 'success', modules: [] }));
app.listen(3000, () => console.log('API http://localhost:3000'));
