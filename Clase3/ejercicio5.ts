const montoTransaccion: number = 45.50;
const porcentajeComision: number = 0.05;

const totalComision: number = montoTransaccion * porcentajeComision;

console.log("Monto: $" + montoTransaccion + " Comisión: " + (porcentajeComision * 100) + "% Total comisión: $" + totalComision.toFixed(2));