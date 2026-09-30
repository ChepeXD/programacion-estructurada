import PromptSync from "prompt-sync";
const prompt = PromptSync();
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function mostrarResumen(fahrenheit) {
    console.log("Grados Fahrenheit: " + fahrenheit);
}
const inputConversion = Number(prompt("Ingrese los grados Celsius: "));
const Fahrenheit = celsiusAFahrenheit(inputConversion);
mostrarResumen(Fahrenheit);
//# sourceMappingURL=ejercicio1.js.map