import promptSync from "prompt-sync";
const prompt = promptSync();
const password = "Hola123";
let passwordIngresada = prompt("Ingrese la contraseña: ");
while (password !== passwordIngresada) {
    console.log("Contraseña incorrecta. Inténtelo de nuevo.");
    passwordIngresada = prompt("Ingrese la contraseña: ");
}
console.log("¡Acceso concedido! Bienvenido al sistema.");
//# sourceMappingURL=ejercicio2.js.map