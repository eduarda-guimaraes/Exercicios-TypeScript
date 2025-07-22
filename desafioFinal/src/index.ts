import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// POST /livros
app.post('/livros', async (req: Request, res: Response) => {
  const { titulo, autor, anoPublicacao } = req.body;
  const anoAtual = new Date().getFullYear();

  if (anoPublicacao > anoAtual) {
    return res.status(400).json({ erro: 'Ano de publicação não pode ser no futuro.' });
  }

  try {
    const livro = await prisma.livro.create({
      data: {
        titulo,
        autor,
        anoPublicacao,
        disponivel: true
      }
    });
    res.status(201).json(livro);
  } catch (error) {
    console.error('Erro ao criar livro:', error);  // Log do erro no console
    res.status(500).json({ erro: 'Erro ao criar livro.' });
  }
});

// GET /livros?autor=Fulano&disponivel=true
app.get('/livros', async (req: Request, res: Response) => {
  const { autor, disponivel } = req.query;
  
  const filtros: any = {};
  if (autor) filtros.autor = { contains: autor as string };
  if (disponivel !== undefined) filtros.disponivel = disponivel === 'true';

  try {
    const livros = await prisma.livro.findMany({ where: filtros });
    res.json(livros);
  } catch (error) {
    console.error('Erro ao buscar livros:', error);  // Log do erro no console
    res.status(500).json({ erro: 'Erro ao buscar livros.' });
  }
});

// PATCH /livros/:id/emprestar
app.patch('/livros/:id/emprestar', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ erro: 'ID inválido.' });
  }

  try {
    const livro = await prisma.livro.findUnique({ where: { id } });
    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }

    if (!livro.disponivel) {
      return res.status(400).json({ erro: 'Livro já emprestado.' });
    }

    const atualizado = await prisma.livro.update({
      where: { id },
      data: { disponivel: false }
    });

    res.json(atualizado);
  } catch (error) {
    console.error('Erro ao emprestar livro:', error);  // Log do erro no console
    res.status(500).json({ erro: 'Erro ao emprestar livro.' });
  }
});

app.listen(3000, () => {
  console.log('API Biblioteca rodando em http://localhost:3000');
});
