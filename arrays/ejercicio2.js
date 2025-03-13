let saldo = 0
let registro = []


function menu(){
    let opcion 
    do{
        opcion = Number(prompt("Que accion desea hacer? \n1 depositar \n2 retirar \n3 consultar saldo \n4 "))
        
        switch(opcion){
            case 1:
                depositar()
                break
            case 2:
                retirar()
                break
            case 3:
                consultarSaldo()
                break
            case 4:
                mostrarRegistros()
                break
        }
    }while (opcion !== 5)
}

function depositar(){
    let deposito = Number(prompt("Cuanto desea depositar?"))
        if(deposito > 0){
            saldo += deposito
            registro.push(deposito)
            agregarRegistro("deposito " +deposito)
            alert("su deposito fue exitoso su saldo es " +saldo)
        }else{
            alert("monto invalido")
        }
    }

function retirar (){
    let retiro = Number(prompt("Cuanto desea retirar?"))
    let money = 0
        if (retiro > 0 && retiro <= saldo){
            saldo -= retiro
            money = 0- retiro 
            registro.push(money)
            agregarRegistro("retiro " +retiro)
            alert("Retiro exitoso su saldo es "+saldo)
        }else{
            alert("monto equivocado")
        }
}

function agregarRegistro(movimiento){
    if(registro.length>5){
        registro.shift()
    }else{
        registro.push()
    }
}

function mostrarRegistros(){
    if (registro.length === 0){
        alert("No hay registros")
    }else{
        let historial = "Ultimos 5 movimientos : " +registro.join ("\n")
        alert(historial)
    }
}

    function consultarSaldo(){
        alert("Su saldo total es de: " +saldo)
    }

menu()
