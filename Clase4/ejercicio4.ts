import promptSync from "prompt-sync";

const prompt = promptSync();

const numero1: number = parseFloat(prompt("Ingrese el primer número: "));
const numero2: number = parseFloat(prompt("Ingrese el segundo número: "));

const suma: number = numero1 + numero2;
const resta: number = numero1 - numero2;
const multiplicacion: number = numero1 * numero2;
const division: number = numero1 / numero2;

console.log(`
========== RESULTADOS ==========
Primer número: ${numero1}
Segundo número: ${numero2}

Suma: ${suma}
Resta: ${resta}
Multiplicación: ${multiplicacion}
División: ${division}
================================
`);