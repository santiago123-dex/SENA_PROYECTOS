let numero = Number(prompt("Ingrese un número"));

const esPar = (num) => num % 2 === 0 ? "par" : "impar";

alert(`El número ${numero} es ${esPar(numero)}.`);
