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