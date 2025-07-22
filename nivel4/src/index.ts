import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/tarefas', async (req: Request, res: Response) => {
  try {
    const { concluida } = req.query;

    const filtro = {
      deletadoEm: null,
      ...(concluida !== undefined && { concluida: concluida === 'true' }),
    };

    const tarefas = await prisma.tarefa.findMany({
      where: filtro,
    });

    res.json(tarefas);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({ erro: 'Erro ao buscar tarefas' });
  }
});


app.post('/tarefas', async (req: Request, res: Response) => {
  const { titulo, concluida } = req.body;

  try {
    const nova = await prisma.tarefa.create({
      data: {
        titulo,
        concluida: concluida ?? false,
      },
    });

    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar tarefa' });
  }
});

app.delete('/tarefas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const tarefa = await prisma.tarefa.findUnique({
      where: { id: Number(id) }
    });

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    const tarefaAtualizada = await prisma.tarefa.update({
      where: { id: Number(id) },
      data: { deletadoEm: new Date() },
    });

    res.json({ mensagem: 'Tarefa marcada como deletada', tarefa: tarefaAtualizada });
  } catch (err) {
    console.error('Erro ao deletar tarefa:', err);
    res.status(500).json({ erro: 'Erro ao deletar tarefa' });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});