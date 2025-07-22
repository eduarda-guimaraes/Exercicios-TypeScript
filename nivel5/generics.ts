function retornarPrimeiro<T>(arr: T[]): T {
  return arr[0];
}

const numeros = [16, 44, 5];
const nomes = ['Charles', 'Lewis', 'Gabriel'];

console.log(retornarPrimeiro(numeros)); 
console.log(retornarPrimeiro(nomes));