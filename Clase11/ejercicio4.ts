import PromptSync from "prompt-sync";

const prompt = PromptSync();

function precioFinal(precio: number, impuesto: number = 0): number {
    return precio + (precio * impuesto / 100);
}

const precio = Number(prompt("Ingrese el precio: "));
const impuesto = Number(prompt("Ingrese el impuesto (%): "));

const total = precioFinal(precio, impuesto);

console.log(`
=====================================
             RESULTADO
=====================================

Precio base: $${precio.toFixed(2)}
Impuesto: ${impuesto}%
Precio final: $${total.toFixed(2)}

=====================================
`);