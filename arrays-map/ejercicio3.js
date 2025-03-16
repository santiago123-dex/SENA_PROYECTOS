let clientes = 0
let cola = []

function menu (){
    let opcion

    do{
        opcion = Number(prompt("\n1 Registrase a la cola \n2 atender \n3 salida"))

        if (opcion < 1 || opcion > 3){
            alert("ingresa un numero valido")
            continue
        }
        switch(opcion){
            case 1:
                registrarCola()
                break
            case 2:
                atender()
                break
            case 3:
                alert("Saliendo de la tienda...")
                window.location.href = "index.html"
                break
        }
    }while(opcion !== 3)
}

function registrarCola (){
    let nombre = prompt("Ingresa tu nombre para registrarte a la cola")
    if (nombre){
        if(clientes < 7){
            clientes ++
            cola.push(nombre)
            alert("Registro exitosamente " +nombre)
        }else{
            alert("No se pueden registrar mas clientes")
    }
}
}

function atender(){
    if(cola.length > 0){
        let atendido = cola.shift()
        alert("Gracias por tu compra " +atendido)
    }else{
        alert("No se encuentran mas clientes")
    }
}

menu()

