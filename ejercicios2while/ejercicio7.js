let genero = prompt("Ingrese su genero n1/ para masculino n2/ para femenino")
let edad = Number(prompt("Ingrese su edad"))

if(genero == 1){
    alert("El valor de ayuda mensual es: $40000")
}else if( genero == 2){
    if(edad>50){
        alert("El valor de la ayuda mensual es: $120000")
    }else if(edad>=30 && edad<=50){
        alert ("El valor de ayuda mensual es: $100000")
    }else{
        alert("No tiene ayuda mensual")
    }
}
window.location.href="index.html"