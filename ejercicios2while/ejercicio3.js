let iniciar = Number(prompt("Desea iniciar (1). Desea salir al menu (2)"))

switch(iniciar){
    case 1:
        let tipoDeLavadora = prompt("Desea una lavadora grande o pequeña?")
        let horas = Number(prompt("Cuantas horas deseas usar la lavadora"))
        let cantidad = Number(prompt("Cuantas lavadoras deseas alquilar"))


    if(tipoDeLavadora == "grande" && cantidad < 3){
    alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +horas *cantidad*4000)
        }else if (tipoDeLavadora == "grande" && cantidad>3){
            costo = horas*cantidad *4000
            descuento = costo*3/100
            costoTotal = costo - descuento
            alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +costoTotal)
        }if(tipoDeLavadora == "pequeña" && cantidad <3){
            alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +horas *cantidad*3000)
        }else if(tipoDeLavadora == "pequeña" && cantidad>3){
            costo = horas*cantidad *3000
            descuento = costo*3/100
            costoTotal = costo - descuento
            alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +costoTotal)
        }
        setTimeout(() => {
            let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

        if(volver ==1){
            window.location.href="ejercicio3.html"
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

        default:
            alert("Error número 404")
}