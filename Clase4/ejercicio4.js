import promptSync from "prompt-sync";
const prompt = promptSync();
const numero1 = parseFloat(prompt("Ingrese el primer número: "));
const numero2 = parseFloat(prompt("Ingrese el segundo número: "));
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
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
