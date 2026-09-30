import promptSync from "prompt-sync";
const prompt = promptSync();
let notaIngresada;
let cantidadNotas = 0;
let sumaNotas = 0;
do {
    notaIngresada = Number(prompt("Ingrese una nota: "));
    if (notaIngresada >= 0) {
        sumaNotas = sumaNotas + notaIngresada;
        cantidadNotas = cantidadNotas + 1;
    }
} while (notaIngresada >= 0);
console.log("Cantidad de notas: " + cantidadNotas);
console.log("Suma de las notas: " + sumaNotas);
if (cantidadNotas > 0) {
    let promedioNotas = sumaNotas / cantidadNotas;
    console.log("Promedio de las notas: " + promedioNotas);
}
//# sourceMappingURL=ejercicio4.js.map