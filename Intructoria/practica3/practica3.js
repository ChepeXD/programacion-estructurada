function enviarNotificacion(mensaje, callback) {
    callback(mensaje);
}
function mostrarEmail(mensaje) {
    console.log("Notificación por Email: " + mensaje);
}
function mostrarSMS(mensaje) {
    console.log("Notificación por SMS: " + mensaje);
}
enviarNotificacion("Hola Antonio", mostrarEmail);
enviarNotificacion("Hola Antonio", mostrarSMS);
export {};
//# sourceMappingURL=practica3.js.map