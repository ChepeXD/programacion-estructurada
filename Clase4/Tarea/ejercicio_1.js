import promptSync from "prompt-sync";
const prompt = promptSync();
const nombre = prompt("Ingrese su nombre completo: ");
const departamento = prompt("Ingrese su departamento: ");
const personas = parseInt(prompt("¿Cuántas personas lo acompañan?: "));
console.log(`Registro exitoso: ${nombre}, procedente de ${departamento}, visita el parque acompañado de ${personas} personas.`);
