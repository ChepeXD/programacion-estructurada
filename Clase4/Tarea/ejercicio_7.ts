import promptSync from "prompt-sync";

const prompt = promptSync();

const huesped: string = prompt("Nombre del huésped: ");
const fecha: string = prompt("Fecha de entrada: ");
const noches: number = parseInt(prompt("Cantidad de noches: "));
const precio: number = parseFloat(prompt("Precio por noche: "));

const total: number = noches * precio;

console.log(`
======= HOTEL =======

Huésped: ${huesped}
Fecha: ${fecha}
Noches: ${noches}
Precio por noche: $${precio.toFixed(2)}

Total de la estadía: $${total.toFixed(2)}

=====================
`);