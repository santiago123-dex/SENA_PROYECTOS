let angulo1, angulo2, angulo3

do{
    angulo1 = Number(prompt("Ingrese el primer angulo"))
    angulo2 = Number(prompt("Ingrese el segundo angulo"))
    angulo3 = Number(prompt("Ingrese el tercer angulo"))
    
    if(angulo1 + angulo2 + angulo3 == 180){
        alert("Este triangulo es valido")
    }else{
        alert("Este triangulo es invalido")
    }
}while (angulo1 + angulo2 + angulo3 != 180)

    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

    if(volver == 1){
        window.location.href = "ejercicio9.html"
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        alert("Error de datos")
    }
    
