export class Carro{
    marca: String;
    modelo: String;
    ano: number;

    constructor(marca: String, modelo: String, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDetalhes(): string {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro1 = new Carro("Honda", "HR-V", 2024);

console.log(carro1.obterDetalhes());