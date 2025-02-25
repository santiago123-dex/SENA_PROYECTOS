// Función para pedir si desea iniciar o salir
function pedirOpcion() {
    return Number(prompt("Desea iniciar (1). Desea salir al menu (2)"));
}

// Función principal que orquesta todo
function iniciarPrograma() {
    let iniciar = pedirOpcion();

    switch (iniciar) {
        case 1:
            let tipoDeLavadora = prompt("Desea una lavadora grande o pequeña?");
            let horas = Number(prompt("Cuantas horas deseas usar la lavadora"));
            let cantidad = Number(prompt("Cuantas lavadoras deseas alquilar"));

            let costoTotal = calcularCostoLavadora(tipoDeLavadora, horas, cantidad);

            alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoDeLavadora} por ${horas} horas: ${costoTotal}`);

            mostrarMenu(); // Mostrar el menú después de calcular el costo

            break;

        case 2:
            window.location.href = "index.html"; // Redirigir al menú principal
            break;

        default:
            alert("Error número 404");
    }
}

// Función para calcular el costo de alquiler de las lavadoras
function calcularCostoLavadora(tipoDeLavadora, horas, cantidad) {
    let costoPorLavadora = tipoDeLavadora === "grande" ? 4000 : 3000;
    let costo = horas * cantidad * costoPorLavadora;

    if (cantidad > 3) {
        costo = aplicarDescuento(costo);
    }

    return costo;
}

// Función para aplicar el descuento si es necesario
function aplicarDescuento(costo) {
    return costo - (costo * 3 / 100); // Descuento del 3%
}


// Función para mostrar el menú de opciones para volver o salir
function mostrarMenu() {
    setTimeout(() => {
        let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"));
        if (volver === 1) {
            window.location.href = "ejercicio3.html";
        } else if (volver === 2) {
            window.location.href = "index.html";
        } else {
            alert("Error de datos");
        }
    }, 3000);
}

// Llamamos a la función principal para iniciar el programa
iniciarPrograma();
