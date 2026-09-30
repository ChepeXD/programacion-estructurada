function analizadorNumeros(...numeros: number[]) {

    let pares = 0;
    let impares = 0;
    let primos = 0;

    for (const numero of numeros) {

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        if (esPrimo(numero)) {
            primos++;
        }
    }

    return {
        pares,
        impares,
        primos
    };
}

function esPrimo(numero: number): boolean {

    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(analizadorNumeros(10, 5, 7, 20));

