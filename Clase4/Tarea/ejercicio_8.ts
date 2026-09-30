let cliente: string = "Carlos Martínez";
let numeroFactura: string = "FAC-1025";
let montoPagado: number = 48.50;

let comprobante: string = `El cliente ${cliente} pagó la factura ${numeroFactura} por un monto de $${montoPagado}.`;

console.log(comprobante);



// Se usaron comillas simples en lugar de backticks.
// La interpolación ${} no funciona con comillas simples.
// "numeroFactura" estaba entre comillas y no mostraba el valor de la variable.
// "montoPagado" también estaba entre comillas y no utilizaba la interpolación correcta.