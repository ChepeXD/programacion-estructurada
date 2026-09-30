function gradosFahrenheit(Celcius) {
    return (Celcius * 9 / 5) + 32;
}
function gradosKelvin(Celcius) {
    return Celcius + 273.15;
}
function gradosCelsius(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
}
function grados(temperatura, callback) {
    return callback(temperatura);
}
console.log(grados(25, gradosFahrenheit));
console.log(grados(25, gradosKelvin));
console.log(grados(77, gradosCelsius));
export {};
//# sourceMappingURL=practica4.js.map