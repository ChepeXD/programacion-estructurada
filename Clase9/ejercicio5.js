import promptSync from "prompt-sync";
const prompt = promptSync();
let limiteNumeros;
let numeroActual = 1;
let cantidadNumerosPares = 0;
limiteNumeros = Number(prompt("Ingrese un número entero positivo: "));
while (isNaN(limiteNumeros) ||
    !Number.isInteger(limiteNumeros) ||
    limiteNumeros <= 0) {
    console.log("Número inválido.");
    limiteNumeros = Number(prompt("Ingrese un número entero positivo: "));
}
while (numeroActual <= limiteNumeros) {
    if (numeroActual % 2 === 0) {
        console.log("Número par: " + numeroActual);
        cantidadNumerosPares = cantidadNumerosPares + 1;
    }
    numeroActual++;
}
console.log("Cantidad total de números pares: " + cantidadNumerosPares);
//# sourceMappingURL=ejercicio5.js.map