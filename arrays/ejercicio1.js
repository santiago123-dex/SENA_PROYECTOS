let habitaciones = [0, 0, 0, 0, 0]
function mostraHabitaciones (){
    alert("El estado de las habitaciones es: ", +habitaciones.join(" - "))
}

function reservar(){
    while(true){
        let reservas = Number(prompt("\n1 Desea reservar \n2 Desea liberar \n3 Volver al menu"))
        
        if (parseInt(reservas) == 1){
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
        else if(parseInt(reservas == 2)){

        }
    }
}

reservar()