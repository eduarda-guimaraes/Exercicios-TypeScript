function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc >= 18.5 && imc < 24.9) return "Normal";
  if (imc >= 25 && imc < 29.9) return "Sobrepeso";
  return "Obesidade";
}

const imc = calcularIMC(57, 1.63);

console.log("Meu IMC: "+classificarIMC(imc));