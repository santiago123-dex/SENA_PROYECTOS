let habitaciones = [0, 0, 0, 0, 0]
function mostraHabitaciones (){ 
    alert("El estado de las habitaciones es: " +habitaciones.join(" - "))
}

function reservar(){
    while(true){
        let reservas = Number(prompt("\n1 Desea reservar \n2 Desea liberar \n3 Volver al menu"))
        
        if (reservas == 1){
            let reservada = false

            for(let i = 0; i < habitaciones.length; i++){
                if(habitaciones[i] == 0 ){
                    habitaciones[i] = 1
                    alert("La habitacion " +(i + 1) + " quedo reservada correctamente")
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

            if(num > 0 && num < habitaciones.length){
                if(habitaciones[num - 1] == 1){
                    habitaciones[num - 1] = 0
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