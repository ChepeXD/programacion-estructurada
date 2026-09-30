import promptSync from "prompt-sync";

const prompt = promptSync();

const producto1: string = prompt("Ingrese el nombre del primer producto: ");
const precio1: number = Number(prompt("Ingrese el precio: "));

const producto2: string = prompt("Ingrese el nombre del segundo producto: ");
const precio2: number = Number(prompt("Ingrese el precio: "));

const producto3: string = prompt("Ingrese el nombre del tercer producto: ");
const precio3: number = Number(prompt("Ingrese el precio: "));

const total: number = precio1 + precio2 + precio3;

console.log(`
========== SUPER SELECTOS ==========
${producto1}: $${precio1}
${producto2}: $${precio2}
${producto3}: $${precio3}
------------------------------------
TOTAL: $${total.toFixed(2)}
====================================
`);