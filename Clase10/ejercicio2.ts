import promptSync from "prompt-sync";
const prompt = promptSync();

const esNumeroPar = (numero: number): boolean => {
  return numero % 2 === 0;
};

const numero: number = Number(prompt("Ingrese un número: "));

if (esNumeroPar(numero)) {
  console.log(`El número ${numero} es par.`);
} else {
  console.log(`El número ${numero} es impar.`);
}