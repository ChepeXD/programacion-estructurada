// Nombre: Jose Antonio Cruz Vigil
// Ejercicio integrador: Gestion de reservaciones

interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// 1. Reservaciones iniciales
let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos", personas: 4, zona: "Interior" },
    { id: 2, cliente: "Maria", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "Jose", personas: 3, zona: "Terraza" },
    { id: 4, cliente: "Ana", personas: 5, zona: "Interior" }
];

console.log("\n========== RESERVACIONES INICIALES ==========");
console.table(reservaciones);

// 2. Registrar reservaciones
function registrarReservacion(lista: Reservacion[],nueva: Reservacion,prioridad: boolean): void { //
    if (prioridad == true) {
        lista.unshift(nueva);
    } else {
        lista.push(nueva);
    }

    console.log("Reservacion registrada:");
    console.table(nueva);
}

console.log("\n========== REGISTRO DE RESERVACIONES ==========");

registrarReservacion(
    reservaciones,{ id: 5, cliente: "Pedro", personas: 2, zona: "Interior" },false
);

registrarReservacion(
    reservaciones,{ id: 6, cliente: "Sofia", personas: 7, zona: "Terraza" },true
);

console.log("\n========== LISTA ANTES DE ATENDER ==========");
console.table(reservaciones);

// 3. Atender la primera reservacion
console.log("\n========== ATENCION DE RESERVACIONES ==========");

let atendida: Reservacion | undefined = reservaciones.shift();

if (atendida != undefined) {
    console.log("Cliente atendido: " + atendida.cliente);
    console.log("Personas: " + atendida.personas);
} else {
    console.log("No hay reservaciones pendientes.");
}

// Comprobar la atencion con una lista vacia
let listaVacia: Reservacion[] = [];
let atendidaVacia: Reservacion | undefined = listaVacia.shift();

if (atendidaVacia != undefined) {
    console.log("Cliente atendido: " + atendidaVacia.cliente);
} else {
    console.log("La lista de prueba esta vacia.");
}

// 4. Buscar por identificador
console.log("\n========== BUSQUEDA DE RESERVACIONES ==========");

let buscada: Reservacion | undefined = reservaciones.find(
    (reserva: Reservacion): boolean => reserva.id == 2
);

if (buscada != undefined) {
    console.log("Reservacion encontrada:");
    console.log(buscada);
} else {
    console.log("No se encontro la reservacion.");
}

// Demostrar una busqueda sin coincidencias
let noEncontrada: Reservacion | undefined = reservaciones.find(
    (reserva: Reservacion): boolean => reserva.id == 99
);

if (noEncontrada != undefined) {
    console.log("Reservacion encontrada:");
    console.log(noEncontrada);
} else {
    console.log("No existe una reservacion con ese ID.");
}

// 5. Filtrar terraza con cinco o mas personas
console.log("\n========== FILTRO DE TERRAZA ==========");

let cantidadAntes: number = reservaciones.length;

let filtro: Reservacion[] = reservaciones.filter(
    (reserva: Reservacion): boolean =>
        reserva.zona == "Terraza" && reserva.personas >= 5
);

console.log("Reservaciones pendientes de terraza con 5 o mas personas:");
console.log(filtro);

if (filtro.length == 0) {
    console.log("No hay reservaciones que cumplan las condiciones.");
}

// 6. Comprobar el estado final
console.log("\n========== ESTADO FINAL ==========");

console.table("Reservaciones pendientes:");
console.table(reservaciones);

console.log("Cantidad de reservaciones pendientes: " + reservaciones.length);
console.log("Cantidad de coincidencias del filtro: " + filtro.length);
console.log("Cantidad antes de filtrar: " + cantidadAntes);
console.log("Cantidad despues de filtrar: " + reservaciones.length);
