let dias = Number(prompt("Cuantos días desea asistir al gimnasio"))

if(dias<=15){
    alert("El costo del gimnasio" +dias+ "días es de: $18.000")
}else if(dias<=30){
    alert("El costo del gimnasio" +dias+ "días es de: $35.000")
}else if(dias <= 90){
    alert("El costo del gimnasio" +dias+ "días es de: $86.000")
}else{
    alert("No tenemos un plan para tantos días, maximo 90 días (3 meses)")
}
window.location.href="index.html"