import promptSync from "prompt-sync";
const prompt = promptSync();
const costoDiario = parseFloat(prompt("Costo diario: "));
const dias = parseInt(prompt("Cantidad de días: "));
const total = costoDiario * dias;
console.log(`
====== PRESUPUESTO ======

Costo diario: $${costoDiario.toFixed(2)}
Días: ${dias}

Total: $${total.toFixed(2)}

=========================
`);
