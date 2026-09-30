import promptSync from "prompt-sync";

const prompt = promptSync();

const costoDiario: number = parseFloat(prompt("Costo diario: "));
const dias: number = parseInt(prompt("Cantidad de días: "));

const total: number = costoDiario * dias;

console.log(`
====== PRESUPUESTO ======

Costo diario: $${costoDiario.toFixed(2)}
Días: ${dias}

Total: $${total.toFixed(2)}

=========================
`);