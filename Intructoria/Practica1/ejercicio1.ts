import PromptSync from "prompt-sync"

const prompt = PromptSync();

function celsiusAFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function mostrarResumen(fahrenheit: number): void {
    console.log("Grados Fahrenheit: " + fahrenheit);
}

const inputConversion = Number(prompt("Ingrese los grados Celsius: "));

const Fahrenheit = celsiusAFahrenheit(inputConversion);

mostrarResumen(Fahrenheit);