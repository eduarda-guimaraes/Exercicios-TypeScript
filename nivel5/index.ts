import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/erro', (req, res) => {
  throw new Error('Erro inesperado!');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Erro capturado:', err.message);
  res.status(500).json({
    error: err.message,
    code: 500,
  });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});