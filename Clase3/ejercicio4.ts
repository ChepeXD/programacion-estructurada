const userName: string = "Jose Antonio";
const asistencia: number = 0.80;
const notaFinal: number = 7.0;

const aprobado: boolean = notaFinal >= 6.0 && asistencia >= 0.80;

console.log("Estudiante: " + userName + " Nota final: " + notaFinal + " Aprobado: " + aprobado);