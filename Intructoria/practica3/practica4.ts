function gradosFahrenheit(Celcius: number): number {
    return (Celcius * 9 / 5) + 32;
}

function gradosKelvin(Celcius: number): number {
    return Celcius + 273.15;
}

function gradosCelsius(Fahrenheit: number): number {
    return (Fahrenheit - 32) * 5 / 9;
}

function grados(
    temperatura: number,
    callback: (temperatura: number) => number
): number {

    return callback(temperatura);
}

console.log(grados(25, gradosFahrenheit));

console.log(grados(25, gradosKelvin));

console.log(grados(77, gradosCelsius));
