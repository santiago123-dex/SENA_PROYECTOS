let habitaciones = new Map()
    for(let i = 1; i<=5; i++){
        habitaciones.set(i,0)
    }

function mostraHabitaciones (){ 
    let estado = ""

    habitaciones.forEach((valor, clave) => {

        if(valor === 0){
            estado += "habitacion" +clave + ": libre \n"
        }else{
            estado += "Habitacion" +clave + ": Ocupada \n"
        }
    })
    alert("El estado de las habitaciones es: " +estado)
}




function reservar(){
    while(true){
        let reservas = Number(prompt("\n1 Desea reservar \n2 Desea liberar \n3 Volver al menu"))
        
        if (reservas == 1){
            let reservada = false

            for(let[clave, valor] of habitaciones){
                if(valor === 0){
                    habitaciones.set[clave, 1]
                    alert("La habitacion " +clave+ " quedo reservada correctamente")
                    reservada = true
                    break
                }
            }
            if(!reservada){
                alert("No hay habitaciones disponibles")
            }
        }
        else if(reservas == 2){
            let num = Number(prompt("Ingrese el numero de habitacion que desee liberar (1 - 5)"))

            if(habitaciones.has[num]){
                if(habitaciones.get[num] == 1){
                    habitaciones.set[num, 0]
                    alert("Habitacion "+num+ " quedo liberada con exito")
                }else{
                    alert("La habitacion " +num+ "esta libre")
                }
            }else{
                alert("Numero de habitacion invalido")
            }
        }
        else if(reservas == 3){
            alert("Saliendo del sistema...")
            window.location.href = "index.html"
            break
        }
        mostraHabitaciones()
    }
}


reservar()