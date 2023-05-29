import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());
app.get('/api/chamados', (req, res) => {
  const filePath = path.resolve(__dirname, 'chamados.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const chamados = JSON.parse(data);
    res.json(chamados);
  });
});

app.get('/api/chamados/:id', (req, res) => {
  const chamadoId = req.params.id;
  const filePath = path.resolve(__dirname, 'chamados.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const chamados = JSON.parse(data);
    const chamado = chamados.find((item) => item.numeroChamado === chamadoId);

    if (!chamado) {
      return res.status(404).json({ error: 'Chamado not found' });
    }

    res.json(chamado);
  });
});

app.listen(8000, () => {
  console.log('API is running on port 8000');
});
