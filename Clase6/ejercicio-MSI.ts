import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Paso 1: Capturar los datos
let nombre: string = prompt("Ingrese su nombre: ");

// Paso 2: Eliminar espacios al inicio y al final
let nombreSinEspacios: string = nombre.trim();

// Paso 3: Obtener la primera letra en mayúscula
let primeraLetra: string = nombreSinEspacios
  .slice(0, 1)
  .toUpperCase();

// Paso 4: Obtener el resto del nombre en minúsculas
let restoDelNombre: string = nombreSinEspacios
  .slice(1)
  .toLowerCase();

// Paso 5: Unir ambas partes
let nombreFormateado: string = primeraLetra + restoDelNombre;

console.log(`Su nombre es:  ${nombreFormateado}`);





import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Paso 1: Capturar los datos
let nombreCliente: string = prompt("Nombre completo del cliente: ");
let producto: string = prompt("Nombre del producto: ");
let precioTexto: string = prompt("Precio unitario: ");
let cantidadTexto: string = prompt("Cantidad comprada: ");
let tipoCliente: string = prompt("Tipo de cliente (A, B o C): ");

// Paso 2: Eliminar espacios innecesarios
nombreCliente = nombreCliente.trim();
producto = producto.trim();
tipoCliente = tipoCliente.trim();

// Paso 3: Convertir el producto a mayúsculas
let productoMayuscula: string = producto.toUpperCase();

// Paso 4: Convertir el tipo de cliente a mayúsculas
tipoCliente = tipoCliente.toUpperCase();

// Paso 5: Convertir los valores numéricos
let precio: number = parseFloat(precioTexto);
let cantidad: number = parseInt(cantidadTexto);

// Paso 6: Validar los datos
if (nombreCliente === "") {
    console.log("Error: el nombre del cliente no puede estar vacío.");
} else if (producto === "") {
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
} else {

    // Paso 7: Determinar el descuento
    let porcentajeDescuento: number = 0;

    if (tipoCliente === "A") {

        porcentajeDescuento = 0.10;

    } else if (tipoCliente === "B") {

        porcentajeDescuento = 0.05;

    } else {

        porcentajeDescuento = 0;
    }

    // Paso 8: Realizar los cálculos
    let subtotal: number = precio * cantidad;

    let cantidadDescontada: number =
        subtotal * porcentajeDescuento;

    let totalPagar: number =
        subtotal - cantidadDescontada;

    // Paso 9: Mostrar comprobante
    console.log(`
========================================
       SISTEMA DE CÁLCULO DE VENTA
========================================

Nombre completo del cliente: ${nombreCliente}
Nombre del producto: ${productoMayuscula}
Precio unitario: $${precio.toFixed(2)}
Cantidad comprada: ${cantidad}
Tipo de cliente (A, B o C): ${tipoCliente}

--------------- COMPROBANTE ---------------

Cliente: ${nombreCliente}
Producto: ${productoMayuscula}
Precio unitario: $${precio.toFixed(2)}
Cantidad: ${cantidad}
Tipo de cliente: ${tipoCliente}
Subtotal: $${subtotal.toFixed(2)}
Descuento aplicado: ${(porcentajeDescuento * 100).toFixed(0)} %
Cantidad descontada: $${cantidadDescontada.toFixed(2)}
TOTAL POR PAGAR: $${totalPagar.toFixed(2)}
--------------------------------------------
`);
}