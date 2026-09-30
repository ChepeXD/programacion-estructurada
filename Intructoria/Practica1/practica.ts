import PromptSync from "prompt-sync"

const prompt = PromptSync();

function calcularSalarioBase(salario: number, horasExtras: number): number {

    const pagoPorHoraExtra = 2.75;
    const totalHorasExtras = horasExtras * pagoPorHoraExtra;

    return salario + totalHorasExtras
}

function calcularDescuento(salarioBruto:number): number{
    if(salarioBruto<500){
        return salarioBruto*0.05;
    } else{
        return salarioBruto*0.10;
    }
}

function calcularsalarioNeto(salarioBruto:number, descuento:number): number{
    return salarioBruto-descuento
}

function mostrarResumen(
    salario:number,
    horasExtras:number,
    salarioBruto:number,
    descuento:number,
    salarioNeto:number
):void {
    console.log("\n=== resumen del salario ===")
    console.log("Salario normal: $ " + salario);
    console.log("Horas Extras : $ " + horasExtras);
    console.log("Salario Bruto: $ " + salarioBruto);
    console.log("Descuento : $ " + descuento);
    console.log("Salario Neto: $ " + salarioNeto);
}

const inputSalario = Number(prompt("Ingrese salario normal : "));
const inputHorasExtras = Number(prompt("Ingrese horas extras : "));

const salarioBruto = calcularSalarioBase(inputSalario,inputHorasExtras);
const descuentoRealizado = calcularDescuento(salarioBruto);
const salarioNetoRealizado = calcularsalarioNeto(salarioBruto,descuentoRealizado);

mostrarResumen(inputSalario,inputHorasExtras,salarioBruto,descuentoRealizado,salarioNetoRealizado)
