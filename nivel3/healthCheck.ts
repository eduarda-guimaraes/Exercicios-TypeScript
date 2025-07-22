import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/status', (req: Request, res: Response) => {
  const timestamp = new Date().toISOString();
  res.json({
    status: 'ok',
    timestamp: timestamp
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});