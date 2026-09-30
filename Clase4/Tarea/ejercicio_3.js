import promptSync from "prompt-sync";
const prompt = promptSync();
const cliente = prompt("Nombre del cliente: ");
const platillo = prompt("Platillo: ");
const cantidad = parseInt(prompt("Cantidad: "));
const precio = parseFloat(prompt("Precio por unidad: "));
const total = cantidad * precio;
console.log(`
========= ORDEN =========
Cliente: ${cliente}

Platillo: ${platillo}
Cantidad: ${cantidad}
Precio: $${precio.toFixed(2)}

Total: $${total.toFixed(2)}
=========================
`);
