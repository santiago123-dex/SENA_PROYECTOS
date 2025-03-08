function iniciarPrograma(){
    let pitido, disco, unidad
    let continuar = true
    
    do{
        pitido = prompt("La pc emite un pitido? Si/No").toLowerCase();
        disco = prompt("el disco del pc gira? Si/No").toLowerCase(); 
        unidad = prompt("La unidad del pc gira?? Si/No").toLowerCase();
        
        if(pitido == "si" && disco == "si"){
            alert("Esta averiada")
        }else if(pitido == "si" && unidad == "si"){
            alert("Pongase en contacto con un tecnico")
        }else if(pitido == "no" && disco == "no"){
            alert("Traiga la computadora para repararla en la central")
        }else if(pitido == "no" && unidad == "no"){
            alert("Compruebe las conexiones de altavoces")
        }else if(pitido == "si" && unidad == "no"){
            alert("Verifique los contactos de la unidad")
        }
        
        const respuesta = prompt("Desea continuar? Si/No").toLowerCase();
        if(respuesta == "no"){
            continuar = false
    }
}while(continuar)
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))
    
    if(volver == 1){
        window.location.href = "ejercicio11.html"
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        alert("Error de datos")
    }
}

iniciarPrograma()