//EJERCICIO 1
let edad = prompt("Ingrese su edad: "); 
if (edad >=18) {
    console.log ("Eres mayor de edad ")

}

else {
    console.log ("Eres menor de edad ")
}

//EJERCICIO 2

let numeroUsuario = prompt ("Ingrese su número: ")
if (numeroUsuario >=0) {
    console.log("El número es positivo ")
}
else { 
    console.log ("El número es negativo ")
}

//EJERCICIO 3 

let numero = prompt("Ingrese un número: ");

numero = parseFloat(numero);

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

//EJERCICIO 4

let totalCompra = prompt ("Ingrese el total de su compra: ")
if (totalCompra > 100) {
    let descuento = totalCompra * 0.1 
    totalCompra = totalCompra - descuento
    console.log ("Tienes un descuento del 10% y su total es: " + totalCompra)
}

else{ 
    console.log ("No tienes descuento ")
}