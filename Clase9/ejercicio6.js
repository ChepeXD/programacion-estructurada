import promptSync from "prompt-sync";
const prompt = promptSync();
let tipoCliente;
let nombreTipoCliente = "";
let porcentajeDescuento = 0;
let nombreProducto;
let precioProducto;
let cantidadProductos = 0;
let subtotalCompra = 0;
let descuentoCompra;
let totalCompra;
// Seleccionar tipo de cliente
do {
    tipoCliente = Number(prompt("Ingrese el tipo de cliente:\n" +
        "1. Cliente regular\n" +
        "2. Estudiante\n" +
        "3. Docente\n"));
    if (tipoCliente < 1 || tipoCliente > 3) {
        console.log("Opción inválida.");
    }
} while (tipoCliente < 1 || tipoCliente > 3);
// Determinar descuento
switch (tipoCliente) {
    case 1:
        nombreTipoCliente = "Cliente regular";
        porcentajeDescuento = 0;
        break;
    case 2:
        nombreTipoCliente = "Estudiante";
        porcentajeDescuento = 5;
        break;
    case 3:
        nombreTipoCliente = "Docente";
        porcentajeDescuento = 10;
        break;
}
// Registrar productos
do {
    nombreProducto = prompt("Ingrese el nombre del producto (escriba fin para terminar): ");
    if (nombreProducto != "fin") {
        precioProducto = Number(prompt(`Ingrese el precio de ${nombreProducto}: `));
        while (isNaN(precioProducto) || precioProducto <= 0) {
            console.log("El precio debe ser mayor que cero.");
            precioProducto = Number(prompt(`Ingrese nuevamente el precio de ${nombreProducto}: `));
        }
        subtotalCompra = subtotalCompra + precioProducto;
        cantidadProductos = cantidadProductos + 1;
    }
} while (nombreProducto != "fin");
// Calcular descuento y total
descuentoCompra = subtotalCompra * porcentajeDescuento / 100;
totalCompra = subtotalCompra - descuentoCompra;
// Mostrar resultados
console.log("===== RESUMEN DE LA COMPRA =====");
console.log(`Tipo de cliente: ${nombreTipoCliente}`);
console.log(`Cantidad de productos: ${cantidadProductos}`);
console.log(`Subtotal: $${subtotalCompra.toFixed(2)}`);
console.log(`Descuento aplicado: $${descuentoCompra.toFixed(2)}`);
console.log(`Total por pagar: $${totalCompra.toFixed(2)}`);
//# sourceMappingURL=ejercicio6.js.map