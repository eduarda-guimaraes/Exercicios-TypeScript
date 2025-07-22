function logTempoExecucao(target: any, key: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const inicio = Date.now();
    const resultado = metodoOriginal.apply(this, args);
    const fim = Date.now();
    console.log(`${key} executado em ${fim - inicio}ms`);
    return resultado;
  };
  return descriptor;
}

export class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}

  @logTempoExecucao
  obterDetalhes(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
}

const carro = new Carro("Honda", "HR-V", 2024);
console.log("Carro Cadastrado!", carro.obterDetalhes());