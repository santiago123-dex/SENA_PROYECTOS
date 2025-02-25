let dias

do{
    dias = Number(prompt("Cuantos días desea asistir al gimnasio"))
    if (dias<1){
        alert("Dias invalidos")
    }else if(dias<=15){
        alert("El costo del gimnasio " +dias+ " días es de: $18.000")
    }else if(dias<=30){
        alert("El costo del gimnasio " +dias+ " días es de: $35.000")
    }else if(dias <= 90){
        alert("El costo del gimnasio " +dias+ " días es de: $86.000")
    }else{
        alert("No tenemos un plan para tantos días, maximo 90 días (3 meses)")
    }
}while(dias<= 0);
let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

if(volver == 1){
    window.location.href = "ejercicio8.html"
}else if(volver == 2){
    window.location.href = "index.html"
}else{
    alert("Error de datos")
}

