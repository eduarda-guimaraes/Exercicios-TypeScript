interface Pessoa {
  nome: string;
  email?: string;
  idade: number;
}

const pessoa: Pessoa = {
  nome: "Eduarda",
  idade: 18,
  email: "eduarda-6573019@estudante.rs.gov.br"
};

console.log(pessoa);