

let nombre = ["Juan", "Jose", "Nelson"] // array tipo String
let numero = [1, 2, 3, 5, 6] // array tipo Numerico
nombre[2] = "Santi"



//Propiedades length

let nombre1 = ["Juan", "Jose", "Nelson"] // array tipo String
// Se agrega en nombre de ultimo en este caso sería despues de Nelson
nombre1[nombre1.length] = "Ana"
// En este caso Ana reemplaza a Jose
nombre1[nombre1.length - 3] = "Ana"
// muestra cuantos valores tenemos dentro del array
console.log(nombre1)
console.log(nombre1.length)


