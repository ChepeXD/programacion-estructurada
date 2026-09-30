import promptSync from "prompt-sync";
const prompt = promptSync();
const nombre = prompt("Ingrese su nombre: ");
const edad = Number(prompt("Ingrese su edad: "));
console.log(`Bienvenido a EL Salvador ${nombre}, usted tiene ${edad} años`);
