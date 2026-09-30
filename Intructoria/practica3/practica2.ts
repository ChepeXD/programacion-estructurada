function generarfactura(
    cliente:string,
    cantidadProducto:number,
    precioProducto:number,
    descuento:number,
    metodoPago:string = "efectivo"
){
    const subtotal = cantidadProducto * precioProducto

    let total = subtotal

    if(descuento !== undefined){
        total = subtotal - (subtotal * descuento / 100 )
    }

    console.log(`
        =================================
                Factura generada
        =================================
        Cliente: ${cliente}
        Producto: ${cantidadProducto}
        Precio producto: ${precioProducto}
        Subtotal: ${subtotal}
        Descuento: ${descuento}
        Metodo pago: ${metodoPago}
        Total a pagar: ${total}

        `)
}
generarfactura("Antonio", 3, 25, 10)