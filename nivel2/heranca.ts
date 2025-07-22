import { Carro } from './classe';

class CarroEletrico extends Carro {
  autonomiaBateria: number;

  constructor(marca: string, modelo: string, ano: number, autonomiaBateria: number) {
    super(marca, modelo, ano); 
    this.autonomiaBateria = autonomiaBateria;
  }

  obterDetalhes(): string {
    return `${super.obterDetalhes()} - Autonomia da bateria: ${this.autonomiaBateria} km`;
  }
}

const carroEletrico = new CarroEletrico("Tesla", "Model S", 2022, 600);

console.log(carroEletrico.obterDetalhes()); 