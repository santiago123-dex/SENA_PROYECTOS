let nombre = prompt("Ingrese su nombre")
let calificacion1 = Number(prompt("Ingrese su primera calificación"))
let calificacion2 = Number(prompt("Ingrese su segunda calificación"))
let calificacion3 = Number(prompt("Ingrese su tercera calificación"))


function calcularPromedio(calificacion1, calificacion2, calificacion3) {
    return (calificacion1 + calificacion2 + calificacion3) / 3 
}


function calificarEstudiante(nombre, promedio) {
    let resultado
    if (promedio < 5) {
        resultado = "Calificación muy baja";
    } else if (promedio >= 5 && promedio < 8) {
        resultado = "Calificación media";
    } else if (promedio >= 8) {
        resultado = "Calificación alta";
}

    return nombre + " tuvo un promedio de " + promedio.toFixed(2) + " y " + resultado;
}


let promedio = calcularPromedio(calificacion1, calificacion2, calificacion3);


alert(calificarEstudiante(nombre, promedio));

