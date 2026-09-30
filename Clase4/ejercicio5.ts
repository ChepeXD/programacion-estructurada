import promptSync from "prompt-sync";

const prompt = promptSync();

const nombre: string = prompt("Ingrese su nombre completo: ");
const fechaRegistro: string = prompt("Ingrese la fecha de registro: ");
const carrera: string = prompt("Ingrese su carrera: ");

console.log(`
========================================
        UNIVERSIDAD DE ORIENTE
========================================
        TARJETA DE BIENVENIDA

Nombre: ${nombre}
Fecha de Registro: ${fechaRegistro}
Carrera: ${carrera}

¡Bienvenido(a) a la UNIVO!
========================================
`);