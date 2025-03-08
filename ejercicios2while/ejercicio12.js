let modelo

do{
    modelo = Number(prompt("Ingrese el modelo de su automovil"))
    switch(modelo){
        case 119 :
        alert("el automóvil esta defectuoso, llevar a garantía")
        break
        case 179 :
            alert("el automóvil esta defectuoso, llevar a garantía")   
        break
        case 189 :
            alert("el automóvil esta defectuoso, llevar a garantía")
            break
        case 195 :
            alert("el automóvil esta defectuoso, llevar a garantía")
            break
        case 221 :
            alert("el automóvil esta defectuoso, llevar a garantía")
            break
        case 780 :
            alert("el automóvil esta defectuoso, llevar a garantía")
            break
        default:
            alert("Su automóvil no está defectuoso")
        }
}while(!(modelo == 119 || modelo == 179 || modelo == 189 || modelo == 195 || modelo == 221 || modelo == 780))
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

    if(volver == 1){
        window.location.href = "ejercicio12.html"
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        alert("Error de datos")
    }
