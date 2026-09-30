import promptSync from "prompt-sync";
const prompt = promptSync();
const nombre = prompt("Nombre del estudiante: ");
const nota1 = parseFloat(prompt("Nota 1: "));
const nota2 = parseFloat(prompt("Nota 2: "));
const nota3 = parseFloat(prompt("Nota 3: "));
const suma = nota1 + nota2 + nota3;
const promedio = suma / 3;
console.log(`
======= RESUMEN ACADÉMICO =======

Estudiante: ${nombre}

Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}

Suma: ${suma}
Promedio: ${promedio.toFixed(2)}

===============================
`);
