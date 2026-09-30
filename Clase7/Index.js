"use strict";
// Condición simple
// const edad: number = 18;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// if (edad >= 18) {
//     console.log("Eres mayor de edad.");
// } else {
//     console.log("Eres menor de edad.");
// }
// Condición para verificar si alcanza el saldo
// const saldo: number = 100;
// const Precio: number = 140;
// if (saldo >= Precio) {
//     console.log("Puedes comprar.");
// } else {
//     console.log("No puedes comprar.");
// }
// //Estructura de control if-else if
// // Nota
// const nota: number = 79;
// if(nota >=90) {
//     console.log("Categoria A")
// } else if(nota >=80){
//     console.log("Categoria B")
// } else if(nota >=70){
//     console.log("Categoria C")
// }else if(nota >=60){
//     console.log("Categoria D")
// } else {
//     console.log("Categoria F")
// }
// //Switch
// const dia: number = 3;
// switch (dia) {
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miércoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Día inválido");
// }
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const año = Number(prompt("Ingrese un año: "));
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log("El año es bisiesto.");
}
else {
    console.log("El año no es bisiesto.");
}
//# sourceMappingURL=Index.js.map