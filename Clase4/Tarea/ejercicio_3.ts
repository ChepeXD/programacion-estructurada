import promptSync from "prompt-sync";

const prompt = promptSync();

const cliente: string = prompt("Nombre del cliente: ");
const platillo: string = prompt("Platillo: ");
const cantidad: number = parseInt(prompt("Cantidad: "));
const precio: number = parseFloat(prompt("Precio por unidad: "));

const total: number = cantidad * precio;

console.log(`
========= ORDEN =========
Cliente: ${cliente}

Platillo: ${platillo}
Cantidad: ${cantidad}
Precio: $${precio.toFixed(2)}

Total: $${total.toFixed(2)}
=========================
`);