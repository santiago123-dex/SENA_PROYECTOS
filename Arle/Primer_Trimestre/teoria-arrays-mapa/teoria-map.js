ss// Crear un Map
let frutas = new Map();

// Agregar valores con set(), el primero valor es la clave y el segundo es el valor
frutas.set("manzana", 10);
frutas.set("banana", 5);
frutas.set("naranja", 8);

// Obtener un valor con get(), cuando ponemos get ponemos la clave para que nos imprima el valor, solo se puede poner la clave
console.log("Cantidad de manzanas:", frutas.get("manzana")); // 10

// Verificar si una clave existe con has(), Cuando usamos el has verificamos si la clave esta en el map, y este responde con un booleano
console.log("¿Hay peras?", frutas.has("pera")); // false
console.log("¿Hay bananas?", frutas.has("banana")); // true

// Recorrer el Map con forEach(), Cuando ponemos el forEach recorremos la clave y el valor, La sintaxis el poner primero el valor y luego la clave
frutas.forEach((cantidad, fruta) => {
    console.log("Fruta: " +fruta+ "Cantidad: " +cantidad);
});
