import promptSync from "prompt-sync";
const prompt = promptSync();
const producto1 = prompt("Ingrese el primer artículo: ");
const precio1 = parseFloat(prompt("Ingrese el precio: "));
const producto2 = prompt("Ingrese el segundo artículo: ");
const precio2 = parseFloat(prompt("Ingrese el precio: "));
const producto3 = prompt("Ingrese el tercer artículo: ");
const precio3 = parseFloat(prompt("Ingrese el precio: "));
const total = precio1 + precio2 + precio3;
console.log(`
========== COTIZACIÓN ==========
${producto1}: $${precio1.toFixed(2)}
${producto2}: $${precio2.toFixed(2)}
${producto3}: $${precio3.toFixed(2)}

Total: $${total.toFixed(2)}
===============================
`);
