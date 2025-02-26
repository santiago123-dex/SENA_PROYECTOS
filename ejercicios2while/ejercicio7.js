let genero, edad

do{
    genero = prompt("Ingrese su genero n1/ para masculino n2/ para femenino")
    edad = Number(prompt("Ingrese su edad"))
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
}while(genero != 1 && genero != 2)  
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

    if(volver == 1){
        window.location.href = "ejercicio7.html"
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        alert("Error de datos")
    }