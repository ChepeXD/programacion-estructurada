import promptSync from "prompt-sync";

const prompt = promptSync();

const dolares: number = parseFloat(prompt("Ingrese la cantidad en dólares: "));

const cambio: number = 8.75;
const colones: number = dolares * cambio;

console.log(`$${dolares.toFixed(2)} equivalen a ₡${colones.toFixed(2)} utilizando una tasa de ₡${cambio} por dólar.`);