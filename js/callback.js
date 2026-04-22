function sumar (a, b) {
    return (a + b);
}

function restar (a, b) {
     return (a - b);
}

function multiplicar (a, b) {
    return (a * b);
} 

function dividir (a, b){
     return (a / b);
}

function calcular (a, b, operacion)
{
    return operacion(a, b)
}

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = window[prompt("Ingrese la operacion a realizar: sumar, restar, multiplicar o dividir")]
let resultado =calcular(numero1, numero2, operacion);
console.log(resultado);