import PromptSync from "prompt-sync";
const prompt = PromptSync();
function registrarEstudiante(nombre, carrera = "Ingeniería en Desarrollo de Software") {
    console.log(`
=====================================
          REGISTRO DE ESTUDIANTE
=====================================

Nombre: ${nombre}
Carrera: ${carrera}

=====================================
`);
}
const nombre = prompt("Ingrese el nombre: ");
const carrera = prompt("Ingrese la carrera o presione Enter para usar la carrera predeterminada: ");
if (carrera === "") {
    registrarEstudiante(nombre);
}
else {
    registrarEstudiante(nombre, carrera);
}
//# sourceMappingURL=ejercicio3.js.map