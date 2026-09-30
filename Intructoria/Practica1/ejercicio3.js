import PromptSync from "prompt-sync";
const prompt = PromptSync();
const saludo = (nombre, cargo) => {
    return `Hola ${nombre}, bienvenido. Su cargo es ${cargo}.`;
};
const nombre = prompt("Ingrese su nombre: ");
const cargo = prompt("Ingrese su cargo (desarrollador, contador, técnico, mecánico): ");
console.log(saludo(nombre, cargo));
//# sourceMappingURL=ejercicio3.js.map