let clienteNombre: string = "Gabriela Lemus";
let saldoActual: number = 250.75;

let mensaje: string = `Estimado ${clienteNombre}, su saldo en el Banco Agrícola es de: $${saldoActual}`;

console.log(mensaje);


// Los errores son:

// Se usan comillas simples (' ') en lugar de backticks (`).
// La interpolación ${} no funciona con comillas simples.
// saldoActual está escrito como "$saldoActual" en vez de ${saldoActual}.
// El texto está dividido en dos líneas sin usar un template literal.