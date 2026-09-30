function enviarNotificacion(
    mensaje: string,
    callback: (mensaje: string) => void
) {

    callback(mensaje);

}

function mostrarEmail(mensaje: string) {
    console.log("Notificación por Email: " + mensaje);
}

function mostrarSMS(mensaje: string) {
    console.log("Notificación por SMS: " + mensaje);
}

enviarNotificacion("Hola Antonio", mostrarEmail);

enviarNotificacion("Hola Antonio", mostrarSMS);

