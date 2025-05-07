

let nombre = ["Juan", "Jose", "Nelson"] // array tipo String
let numero = [1, 2, 3, 5, 6] // array tipo Numerico
nombre[2] = "Santi"



//Propiedades length

let nombre1 = ["Juan", "Jose", "Nelson"] // array tipo String
console.log(nombre1)
// Se agrega en nombre de ultimo en este caso sería despues de Nelson
nombre1[nombre1.length] = "Ana"
// En este caso Ana reemplaza a Jose
nombre1[nombre1.length - 3] = "Ana"
// muestra cuantos valores tenemos dentro del array y muestra el array
console.log(nombre1)
console.log(nombre1.length)


// Union de arrays

let nombres = ["Juan", "Jose", "Maria"]
let nombres1 = ["Sofia", "Camila"]

// En este caso los primero va a poner los nombres de la variable "nombres" y luego pone la otra variable,los tres puntos se usan para expandir los elementos de los dos arrays esto quiere decir que los va a unir para que todo quede en un solo array
let copia = [...nombres, ...nombres1]
console.log(copia)

// Listas on bucle for

let nombres2 = ["Juan", "Jose", "Maria"]
let nombres3 = ["Sofia", "Camila"]

let copias = [...nombres2, ...nombres3]
// la variable lista lo que hace es tomar todo de copias y ponerlo en una lista
for(const lista of copias){
    console.log(lista)
}

// Variable shift

let frutas = ["Manzana", "Mandarina", "Pera"]
// Lo que hace el shift es que siempre va a borrar el primer elemento
frutas.shift()
console.log(frutas)

// Variable pop

let frutas1 = ["Manzana", "Mandarina", "Pera"]
// En esta caso "pop" va a borrar el ultimo elemento
frutas1.pop()
console.log(frutas1)

// Variable splice

let frutas2 = ["Manzana", "Mandarina", "Pera", "Uva", "Kiwi"]
// el splice borra a partir de los valores, en este ejemplo el primer valor determina el indice y el segundo el numero de valores que borra
frutas2.splice(0, 2)
console.log(frutas2)

// Listas con .map

const nombre7 = ["jose", "ana", "vivi", "camila"]

const array = nombre7.map(n => console.log(n))// el map ademas de transformar puede organizar en lista 


// mapa 

console.log(`${Math.floor(5.7)} ${Math.ceil(5.2)} ${Math.round(5.5)}`)
