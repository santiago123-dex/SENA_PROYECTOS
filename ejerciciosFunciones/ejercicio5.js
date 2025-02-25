let fisica, quimica, biologia, matematicas, informatica;
const calificacionMala = "Mala";
const calificacionBuena = "Buena";
const calificacionExcelente = "Excelente";

while (true) {
    fisica = Number(prompt("Cual ha sido su calificacion en Fisica (0-10)?"));
    if (fisica < 0 || fisica > 10 || isNaN(fisica)) {
        alert("Por favor, ingrese una calificación válida entre 0 y 10.");
        continue;
    }

    quimica = Number(prompt("Cual ha sido su calificacion en Quimica (0-10)?"));
    if (quimica < 0 || quimica > 10 || isNaN(quimica)) {
        alert("Por favor, ingrese una calificación válida entre 0 y 10.");
        continue;
    }

    biologia = Number(prompt("Cual ha sido su calificacion en Biologia (0-10)?"));
    if (biologia < 0 || biologia > 10 || isNaN(biologia)) {
        alert("Por favor, ingrese una calificación válida entre 0 y 10.");
        continue;
    }

    matematicas = Number(prompt("Cual ha sido su calificacion en Matematicas (0-10)?"));
    if (matematicas < 0 || matematicas > 10 || isNaN(matematicas)) {
        alert("Por favor, ingrese una calificación válida entre 0 y 10.");
        continue;
    }

    informatica = Number(prompt("Cual ha sido su calificacion en Informatica (0-10)?"));
    if (informatica < 0 || informatica > 10 || isNaN(informatica)) {
        alert("Por favor, ingrese una calificación válida entre 0 y 10.");
        continue;
    }
    
    break;
}

const promedio = (fisica + quimica + biologia + matematicas + informatica) / 5;

if (promedio < 6) {
    alert("Su porcentaje es de " + promedio * 10 + " % y su calificación es: " + calificacionMala);
} else if (promedio >= 6 && promedio <= 8) {
    alert("Su porcentaje es de " + promedio * 10 + " % y su calificación es: " + calificacionBuena);
} else if (promedio > 8) {
    alert("Su porcentaje es de " + promedio * 10 + " % y su calificación es: " + calificacionExcelente);
}
