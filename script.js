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
    console.log ("No tines descuento ")
}

//EJERCICIO 5

let numero1 = prompt ("Ingrese el primer número: ")
let numero2 = prompt ("Ingrese el segundo número: ")
if (numero1 < numero2) { 
    console.log ("El primer número es mayor que el segundo ")

}
else if (numero1 < numero2) { 
    console.log ("El segundo número es mayor que el segundo ")

}

//EJERCICIO 6

let ClasifiacionDeEdad = prompt ("Ingrese su edad: ")
if (ClasifiacionDeEdad >= 0 && ClasifiacionDeEdad <= 12) {
    console.log ("Eres un niño ")
}
else if (ClasifiacionDeEdad > 12 && ClasifiacionDeEdad < 17) {
    console.log ("Eres un adolescente")
}
else if (ClasifiacionDeEdad > 18 && ClasifiacionDeEdad < 64){
    console.log ("Eres un adulto ")

}
else if (ClasifiacionDeEdad >= 64) {
    console.log ("Eres un adulto mayor ")
}

//EJERCICIO 7

let nota = prompt("Ingrese una nota entre 0 y 100: ")
if (nota >= 90 && nota <= 100) {
    console.log ("!EXECELENTE¡")
}

else if (nota >= 70 && nota <= 89){
    console.log ("Aprobado ")
}
else if (nota >= 50 && nota <= 69){
    console.log ("Regular ")
}
else if (nota >= 0 && nota <= 49){
    console.log ("Regular ")
}

//EJERCICIO 8

let OpcioMenu = prompt ("Elija una opción de menú: 1.- Pizza 2.- Hamburguesa 3.- Tacos");

switch (OpcioMenu) { 
    case 1: 
    console.log ("Has elegido pizza ")
    break; 
    case 2: 
    console.log ("Has elegido hamburguesa ")
    break; 
    case 3: 
    console.log ("Has elegido tacos ")
    
    default: 
    console.log ("Opción no valida. ")
}
