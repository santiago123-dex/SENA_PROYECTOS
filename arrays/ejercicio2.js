let saldo = 0
let registro = []


function menu(){
    let opcion 
    do{
        opcion = Number(prompt("Que accion desea hacer? \n1 depositar \n2 retirar \n3 consultar saldo \n4 Salir"))
        
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
                alert("Espero halla tenido una gran experiencia")
                window.location.href = "index.html"
        }
    }while (opcion !== 4)
}

function depositar(){
    let deposito = Number(prompt("Cuanto desea depositar?"))
        if(deposito > 0){
            saldo += deposito
            agregarRegistro("deposito " +deposito)
            alert("su deposito fue exitoso su saldo es " +saldo)
        }else{
            alert("monto invalido")
        }
    }

function retirar (){
    let retiro = Number(prompt("Cuanto desea retirar?"))
        if (retiro > 0 && retiro <= saldo){
            saldo -= retiro
            agregarRegistro("retiro " +retiro)
            alert("Retiro exitoso su saldo es "+saldo)
        }else{
            alert("monto equivocado")
        }
}

function agregarRegistro(movimiento){
    if(registro.length>=5){
        registro.shift()
    }else{
        registro.push()
    }
}

    function consultarSaldo(){
        alert("Su saldo total es de: " +saldo)
    }

menu()
