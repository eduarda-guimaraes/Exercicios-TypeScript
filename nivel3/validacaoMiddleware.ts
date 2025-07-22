import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

function validarTarefa(req: Request, res: Response, next: NextFunction) {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({ error: "Campo 'titulo' é obrigatório e deve ser uma string não vazia." });
  }

  next();
}

app.use(express.json());

app.get('/tarefas', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Bem-vindo ao serviço de tarefas!' });
});

app.post('/tarefas', validarTarefa, (req: Request, res: Response) => {
  const { titulo } = req.body;
  res.status(200).json({ message: `Tarefa "${titulo}" criada com sucesso!` });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
