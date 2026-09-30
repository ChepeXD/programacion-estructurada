import PromptSync from "prompt-sync";
const prompt = PromptSync();
function saludo(nombre, segundoNombre, mensaje = "univo") {
    if (segundoNombre) {
        return `Hola ${nombre} ${segundoNombre}, bienvenido/a a la ${mensaje}`;
    }
    return `Hola ${nombre}, bienvenido/a a la ${mensaje}.`;
}
const nombre = prompt("Ingrese su primer nombre: ");
const segundoNombreInput = prompt("Ingrese su segundo nombre (opcional): ");
const mensajeInput = prompt("Ingrese un nuevo texto: ");
const segundoNombre = segundoNombreInput || undefined;
const mensaje = mensajeInput || undefined;
console.log(saludo(nombre, segundoNombre, mensaje));
//# sourceMappingURL=ejercicio4.js.map