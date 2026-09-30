import promptSync from "prompt-sync";

const prompt = promptSync();

const nombre: string = prompt("Ingrese su nombre completo: ");
const departamento: string = prompt("Ingrese su departamento: ");
const personas: number = parseInt(prompt("¿Cuántas personas lo acompañan?: "));

console.log(`Registro exitoso: ${nombre}, procedente de ${departamento}, visita el parque acompañado de ${personas} personas.`);