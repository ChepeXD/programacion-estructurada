let cliente = "Carlos Martínez";
let numeroFactura = "FAC-1025";
let montoPagado = 48.50;
let comprobante = `El cliente ${cliente} pagó la factura ${numeroFactura} por un monto de $${montoPagado}.`;
console.log(comprobante);
export {};
// Se usaron comillas simples en lugar de backticks.
// La interpolación ${} no funciona con comillas simples.
// "numeroFactura" estaba entre comillas y no mostraba el valor de la variable.
// "montoPagado" también estaba entre comillas y no utilizaba la interpolación correcta.
