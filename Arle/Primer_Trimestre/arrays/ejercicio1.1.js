let habitaciones = [0, 0, 0, 0, 0]

while(true){
    let opcion = Number(prompt("\n1 Desea reservar \n2 Desea liberar \n3 Volver al menu"))
    if (opcion === 1) {
        let num = prompt("¿Qué habitación desea reservar? (1-5):");
        num = parseInt(num);
        if (num >= 1 && num <= 5) {
            if (habitaciones[num - 1] === 0) {
                habitaciones[num - 1] = 1;
                alert("La habitación " + num + " ha sido reservada.");
            } else {
                alert("La habitación " + num + " ya está reservada.");
            }
        } else {
            alert("Número de habitación inválido.");
        }
        } else if (opcion === 2) {
            let num = prompt("¿Qué habitación desea liberar? (1-5):");
            num = parseInt(num);
            if (num >= 1 && num <= 5) {
                if (habitaciones[num - 1] === 1) {
                habitaciones[num - 1] = 0;
                alert("La habitación " + num + " ha sido liberada.");
            } else {
                alert("La habitación " + num + " ya está libre.");
            }
        } else {
            alert("Número de habitación inválido.");
        }
        }else if (opcion === 3) {
            alert("Saliendo del sistema...");
            window.location.href = "index.html"
            break;
        } else {
            alert("Opción inválida. Intente de nuevo.");
        }
    
        alert("Estado de las habitaciones: " + habitaciones.join(" - "));
    }
