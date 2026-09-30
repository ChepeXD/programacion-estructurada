const userName: string = "Jose Antonio";
const peso: number = 96;
const altura: number = 1.83;
const imc: number = (peso / altura**2);
console.log("El imc de " + userName + " "+ imc.toFixed(2));