let fisica = Number(prompt("Cual ha sido su calificacion en Fisica"))
let quimica = Number(prompt("Cual ha sido su calificacion en Quimica"))
let biologia = Number(prompt("Cual ha sido su calificacion en Biologia"))
let matematicas = Number(prompt("Cual ha sido su calificacion en Matematicas"))
let informatica = Number(prompt("Cual ha sido su calificacion en Informatica"))
const calificacionMala = "Mala"
const calificacionBuena = "Buena"
const calificacionExcelente = "Excelente"


promedio = (fisica + quimica + biologia + matematicas + informatica)/50 *100

if(promedio < 60){
    alert("Su porcentaje es de "  +promedio+ " % y su calificacion es: " +calificacionMala )
}else if(promedio >= 60 && promedio <= 80){
    alert("Su porcentaje es de " +promedio+ " % y su calificacion es: " +calificacionBuena)
}else if(promedio >80){
    alert("Su porcentaje es de " +promedio+ " % y su calificacion es: " +calificacionExcelente)
}
window.location.href="index.html"