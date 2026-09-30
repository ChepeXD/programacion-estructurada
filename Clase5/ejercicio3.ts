import promptSync from "prompt-sync";

const prompt = promptSync();

// Capturar el promedio como texto
const promedioTexto: string = prompt("Ingrese el promedio final: ");

// Convertir a número decimal
const promedio: number = parseFloat(promedioTexto);

// Verificar si la conversión es válida
if (isNaN(promedio)) {
    console.log("Error: el dato ingresado no es un número válido.");
} else {
    // Redondear al entero más cercano
    const promedioRedondeado: number = Math.round(promedio);

    console.log("Promedio convertido:", promedio);
    console.log("Promedio redondeado:", promedioRedondeado);
}