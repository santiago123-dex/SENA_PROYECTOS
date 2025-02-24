let cantidad

do{
    cantidad = Number(prompt("Cuantas copias desea sacar"))
    
    if(cantidad<500){
        alert("El valor de la copia es $120 y el valor total es de: " +cantidad*120)
    }else if(cantidad>=500 && cantidad < 750){
        alert("El valor de la copia es de $100 y el valor total es de: " +cantidad*100) 
    }else if(cantidad>=749 && cantidad<1000){
        alert("El valor de la copia es de $80 y el valor total es de: " +cantidad*80) 
    }else if(cantidad>1000){
        alert("El valor de la copia es de $50 y el valor total es de: " +cantidad*50) 
    }

}while (cantidad <= 0)
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

    if(volver == 1){
        window.location.href = "ejercicio10.html"
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        alert("Error de datos")
    }