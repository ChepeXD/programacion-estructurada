import PromptSync from "prompt-sync";
const prompt = PromptSync();
// Paso 1 apturar los datos
let nombre = prompt("Ingrese su nombre: ");
// Paso 2 Eliminar espacios en banco al inicio y al final del nombre
let nombreSinEspacios = nombre.trim();
// Paso 3 Extraer la primera letra del nombre y convertirla a mayuscula
let nombreMayuscula = nombre.toUpperCase();
console.log(nombreMayuscula.slice(0, 1));
//-------------------------------------
// Ejemplo de contar caracteres
// console.log(contrasena.length);
//-------------------------------------
// Ejemplo slice
// console.log(nombre.slice(0,1));
//-------------------------------------
// Ejemplo de trim()
// let nombreSinEspacios: string = nombre.trim();
// console.log(nombreSinEspacios);
//-------------------------------------
// Ejemplo de toUpperCase();
// let nombreMayuscula: string = nombre.toUpperCase();
//-------------------------------------
// console.log(nombreMayuscula);
// console.log(nombre);
//# sourceMappingURL=ejercicio.js.map