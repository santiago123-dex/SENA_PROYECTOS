let iniciar = Number(prompt("Desea iniciar (1). Desea salir al menu (2)"))

switch(iniciar){
case 1:
    let numero = Number(prompt("Ingrese un numero"))
    if(numero %2 == 0){
        alert("Numero par")
    }else{
        alert("Numero impar")
    }
    setTimeout(() => {
        let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

        if(volver ==1){
            window.location.href="ejercicio2.html"
        }else if(volver == 2){
            window.location.href = "index.html"
        }else{
            alert("Error de datos")
        }

    }, 3000)

    break

    case 2:
        window.location.href = "index.html"
    
    break

    default : 
        alert("Error numero 404")

}