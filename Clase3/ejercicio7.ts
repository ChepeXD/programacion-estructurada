const montoCompra: number = 75.00;
const tarjetaAliada: boolean = true;

let descuento: number = 0;

if (montoCompra > 50 && tarjetaAliada) {
    descuento = montoCompra * 0.12;
}

const totalPagar: number = montoCompra - descuento;

console.log("Compra: $" + montoCompra + " Descuento: $" + descuento.toFixed(2) + " Total a pagar: $" + totalPagar.toFixed(2));