import promptSync from "prompt-sync";

const prompt = promptSync();

const cliente: string = prompt("Ingrese el nombre del cliente: ");
const producto: string = prompt("Ingrese el producto: ");
const cantidad: number = parseInt(prompt("Ingrese la cantidad: "));
const precio: number = parseFloat(prompt("Ingrese el precio unitario: "));

const total: number = cantidad * precio;

console.log(`
====================================
        LA TARTALETA
====================================
Cliente: ${cliente}

Producto: ${producto}
Cantidad: ${cantidad}
Precio Unitario: $${precio.toFixed(2)}

------------------------------------
Total a Pagar: $${total.toFixed(2)}
====================================
`);