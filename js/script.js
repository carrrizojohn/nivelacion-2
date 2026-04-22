// funcion tradicional
function hola(nombre){
    console.log(`Hola ${nombre}`);
}
// funcion anonima
let saludar1 = function(nombre) {
    console.log(`Hola ${nombre}`);
}
// funcion flecha
let saludar3 = (nombre) => {
    console.log(`Hola ${nombre}`);
}

nombre = prompt("ingrese su nombre");
hola(nombre);
document.write(`Hola ${nombre}`);
alert(`Hola ${nombre}`);

let sumar = (a, b) => console.log(a + b);

let restar = (a, b) => console.log(a - b);

let multiplicar = (a, b) => console.log(a * b);

let dividir = (a, b) => console.log(a / b);

let calcualar = (a, b, operacion) => operacion(a, b);

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion a realizar: sumar, restar, multiplicar o dividir");

console.log("Suma:");


calcualar(numero1, numero2, operacion.toLowerCase);

