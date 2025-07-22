# Exercícios 1

Exercícios progressivos para praticar TypeScript, Node.js, Express e Prisma, com base nos conceitos abordados.

---

## **Nível 1: Fundamentos de TypeScript**

### **1.1 Tipos Básicos**
- Crie variáveis com tipos explícitos:
  - `nome` (string), `idade` (number), `ativo` (boolean).
  - Um array de strings chamado `hobbies`.
  - Uma tupla `ponto` que representa coordenadas [x, y] (ambos números).

### **1.2 Funções Tipadas**
- Crie uma função `calcularIMC(peso: number, altura: number): number` que retorna o IMC.
- Adicione um tipo de retorno `string` para uma função que classifique o IMC (ex: "Normal", "Sobrepeso").

### **1.3 Interfaces**
- Defina uma interface `Pessoa` com:
  - `nome` (string obrigatório)
  - `email` (string opcional)
  - `idade` (number)
- Crie um objeto que implemente essa interface.

---

## **Nível 2: Classes e Orientação a Objetos**

### **2.1 Classe `Carro`**
- Crie uma classe `Carro` com:
  - Propriedades: `marca`, `modelo`, `ano`.
  - Método `obterDetalhes(): string` que retorna uma descrição completa.
  - Crie uma instância e chame o método.

### **2.2 Herança**
- Estenda a classe `Carro` para criar `CarroEletrico` com:
  - Nova propriedade `autonomiaBateria`.
  - Sobrescreva `obterDetalhes()` para incluir a autonomia.

---

## **Nível 3: Integração com Express**

### **3.1 Rota de Health Check**
- Adicione uma rota GET `/status` que retorne:
```json
{ "status": "ok", "timestamp": "2024-01-01T12:00:00Z" }
```

## **3.2 Validação de Middleware**
Crie um middleware `validarTarefa` que verifique se:
- O corpo da requisição POST `/tarefas` tem `titulo` (string não vazia).
- Se falhar, retorne status 400 com mensagem de erro.

---

## **Nível 4: Prisma e Banco de Dados**

### **4.1 Query com Filtro**
- Modifique a rota GET `/tarefas` para aceitar query params:
  - `concluida`: boolean (filtra tarefas por status).
  - Exemplo: `/tarefas?concluida=true`.

### **4.2 Soft Delete**
- Adicione um campo `deletadoEm` no modelo Prisma.
- Crie uma rota DELETE `/tarefas/:id` que "marque" a tarefa como deletada (sem apagar fisicamente).

---

## **Nível 5: Avançado**

### **5.1 Generics**
- Crie uma função `retornarPrimeiro<T>(arr: T[]): T` que retorna o primeiro elemento de qualquer array tipado.
- Teste com arrays de números e strings.

### **5.2 Tratamento de Erros Global**
- Implemente um middleware de erro global que:
  - Capture erros lançados nas rotas.
  - Retorne formato padronizado:
    ```json
    { "error": "Mensagem do erro", "code": 500 }
    ```

### **5.3 Decorators**
- Crie um decorator `@logTempoExecucao` que registre o tempo de execução de um método.
- Aplique-o ao método `obterDetalhes` da classe `Carro`.

---

## **Desafio Final: Projeto Integrado**
Crie uma API para um sistema de biblioteca com:
- Modelo Prisma `Livro` (id, titulo, autor, anoPublicacao, disponivel).
- Rotas:
  - `POST /livros` (criação)
  - `GET /livros` (lista, com filtro por autor ou disponibilidade)
  - `PATCH /livros/:id/emprestar` (marca livro como indisponível)
- Validações:
  - Ano de publicação não pode ser futuro.
  - Não permitir empréstimo de livro indisponível.
- Teste todas as rotas com Postman/Insomnia.
