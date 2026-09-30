import PromptSync from "prompt-sync";
const prompt = PromptSync();
function descuentoCompra(precio, descuento = 10) {
    return precio - (precio * descuento / 100);
}
const precio = Number(prompt("Ingrese el precio de la compra: "));
const entradaDescuento = prompt("Ingrese el descuento (%) o presione Enter para usar 10%: ");
let descuento;
if (entradaDescuento === "") {
    descuento = 10;
}
else {
    descuento = Number(entradaDescuento);
}
const total = descuentoCompra(precio, descuento);
console.log(`
=====================================
            LIBRERIA UNIVO
=====================================

Precio: $${precio}
Descuento: ${descuento}%
Total a pagar: $${total}

=====================================
`);
//# sourceMappingURL=ejercicio2.js.map