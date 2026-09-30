import promptSync from "prompt-sync";
const prompt = promptSync();
const huesped = prompt("Nombre del huésped: ");
const fecha = prompt("Fecha de entrada: ");
const noches = parseInt(prompt("Cantidad de noches: "));
const precio = parseFloat(prompt("Precio por noche: "));
const total = noches * precio;
console.log(`
======= HOTEL =======

Huésped: ${huesped}
Fecha: ${fecha}
Noches: ${noches}
Precio por noche: $${precio.toFixed(2)}

Total de la estadía: $${total.toFixed(2)}

=====================
`);
