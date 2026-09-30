import promptSync from "prompt-sync";
const prompt = promptSync();

//Solicito los datos al usuario
const nombreCliente = prompt("Ingrese nombre completo del cliente: ").trim();
const nombreProducto = prompt("Nombre del producto: ").trim();
const precioTexto = prompt("Precio unitario: ");
const cantidadTexto = prompt("Cantidad comprada: ");
const tipoCliente = prompt("Tipo de cliente (A, B o C): ").trim().toUpperCase();
let precio: number = parseFloat(precioTexto);
let cantidad: number = parseInt(cantidadTexto);

//Aqui valido que el usuario no escriba algo que no debe y asi evito que el programa tenga problemas
if (nombreCliente === "") {
    console.log("Error: el nombre del cliente no puede estar vacío.");
} else if (nombreProducto === "") {
    console.log("Error: el nombre del producto no puede estar vacío.");
} else if (isNaN(precio)) {
    console.log("Error: el precio debe ser un número.");
} else if (precio <= 0) {
    console.log("Error: el precio debe ser mayor que cero.");
} else if (isNaN(cantidad)) {
    console.log("Error: la cantidad debe ser un número.");
} else if (cantidad <= 0) {
    console.log("Error: la cantidad debe ser mayor que cero.");
} else if (tipoCliente !== "A" && tipoCliente !== "B" && tipoCliente !== "C") {
    console.log("Error: el tipo de cliente debe ser A, B o C.");
}   
//Hago la operacion del descuento segun el tipo de cliente que es
    else {

    let porcentajeDescuento: number = 0;

    if (tipoCliente === "A") {
        porcentajeDescuento = 0.10;
    } else if (tipoCliente === "B") {
        porcentajeDescuento = 0.05;
    } else {
        porcentajeDescuento = 0;
    }

    const subtotal: number = precio * cantidad;
    const descuento: number = subtotal * porcentajeDescuento;
    const totalPagar: number = subtotal - descuento;

    //Imprimimos el recibo
    console.log(`
========================================
       SISTEMA DE CÁLCULO DE VENTA
========================================
Nombre completo del cliente: ${nombreCliente}
Nombre del producto: ${nombreProducto.toUpperCase()}
Precio unitario: $${precio.toFixed(2)}
Cantidad comprada: ${cantidad}
Tipo de cliente (A, B o C): ${tipoCliente}

--------------- COMPROBANTE ---------------
Cliente: ${nombreCliente}
Producto: ${nombreProducto.toUpperCase()}
Precio unitario: $${precio.toFixed(2)}
Cantidad: ${cantidad}
Tipo de cliente: ${tipoCliente}
Subtotal: $${subtotal.toFixed(2)}
Descuento aplicado: ${(porcentajeDescuento * 100)} %
Cantidad descontada: $${descuento.toFixed(2)}
TOTAL POR PAGAR: $${totalPagar.toFixed(2)}
--------------------------------------------`)
}