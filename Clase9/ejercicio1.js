import promptSync from "prompt-sync";
const prompt = promptSync();
const entradaNumero = prompt("Ingrese la tabla de multiplicar que desea aprender: ");
const numero = parseInt(entradaNumero, 10);
if (isNaN(numero) || numero < 0) {
    console.log("!Error ingrese un valor numerico!");
}
else {
    console.log(`\nTabla de multiplicar ${numero}`);
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const resultado = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = 4{resultado}`);
    }
}
//# sourceMappingURL=ejercicio1.js.map