console.log("# Ejercicio 14 ---------------------------");
let tamaño = "grande";
let ingredientes = ["tocineta", "queso"];
let costoSandwichBase = tamaño === "pequeño" ? 6000 : 12000;
let costoIngredientes = 0;


if (ingredientes.includes("tocineta")) {
    costoIngredientes += 3000;
}
if (ingredientes.includes("pavo")) {
    costoIngredientes += 3000;
}
if (ingredientes.includes("queso")) {
    costoIngredientes += 2500;
}
let totalSandwich = costoSandwichBase + costoIngredientes;
console.log("El costo total del sándwich es: " + totalSandwich);