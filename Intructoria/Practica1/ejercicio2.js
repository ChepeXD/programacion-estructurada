import PromptSync from "prompt-sync";
const prompt = PromptSync();
const paridad = (numero) => {
    return numero % 2 === 0;
};
const inputParidad = Number(prompt("Ingrese el número que verificará: "));
console.log(paridad(inputParidad));
//# sourceMappingURL=ejercicio2.js.map