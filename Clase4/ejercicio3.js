import promptSync from "prompt-sync";
const prompt = promptSync();
const cliente = prompt("Ingrese el nombre del cliente: ");
const producto = prompt("Ingrese el producto: ");
const cantidad = parseInt(prompt("Ingrese la cantidad: "));
const precio = parseFloat(prompt("Ingrese el precio unitario: "));
const total = cantidad * precio;
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
