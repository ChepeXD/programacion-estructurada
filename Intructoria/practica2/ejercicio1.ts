function sumar(...numeros: number[]): number {
    let resultado = 0;
    for (const numero of numeros) {
        resultado += numero;
    }
    return resultado;
}
const arreglo = [1, 2, 3, 4, 5];

function sumaSimple(numeroA: number, numeroB: number): number {
    let resultado = 0;
    resultado = numeroA + numeroB;
    return resultado;
}
console.log(sumar(...arreglo));
console.log(sumaSimple(1, 2));
