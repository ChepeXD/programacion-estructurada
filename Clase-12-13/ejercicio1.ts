
type operacionNotas = (notas: number[]) => number;

function calcularPromedio(notas: number[]): number {

    let suma = 0;

    for (const nota of notas) {

        suma += nota;

    }

    return suma / notas.length;

}

function encontrarNotaMayor(notas: number[]): number {

    let notaMayor: number = notas[0]!;

    for (const nota of notas) {

        if (nota > notaMayor) {

            notaMayor = nota;

        }

    }

    return notaMayor;

}

function procesarCalificaciones(

    nombreEstudiante: string,

    operacion: operacionNotas,

    ...calificaciones: number[]

): void {

    if(calificaciones.length == 0) {
        console.log(`No se registraron calificaciones para ${nombreEstudiante}.`
        );

        return;
    }

    const resultado: number = operacion(calificaciones);
    console.log("\nReporte del estudiante");
    console.log(`nombre: ${nombreEstudiante}`);
    console.log(`Calificaciones: ${calificaciones.join(", ")} `);
    console.log(`resultado: ${resultado.toFixed(2)} `);
}

procesarCalificaciones(
    "Antonio",
    calcularPromedio,
    8.9,
    9,
    7.5,
    10
)

procesarCalificaciones(
    "Carlos",
    encontrarNotaMayor,
    8.9,
    9,
    7.5,
    10
)

