import PromptSync from "prompt-sync";
const prompt = PromptSync();
function precioFinal(precio, impuesto = 0) {
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
//# sourceMappingURL=ejercicio4.js.map