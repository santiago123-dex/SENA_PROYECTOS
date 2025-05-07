let productos = ["Agua", "Papas", "Gomitas", "Jugo", "Chicles"]
let stock = [5, 5, 5, 5, 5]

function mostrarCantidades() {
    let mensaje = "Inventario:\n"
    for (let i = 0; i < productos.length; i++) {
        mensaje += (i + 1) + ". " + productos[i] + " - Stock: " + stock[i] + "\n"
    }
    alert(mensaje);
}

function sugerirProducto(){
    for(let i = 0; i < stock.length; i++)
        if(stock [i] > 0){
            return productos[i]
        }
}

function comprarProducto(){
    mostrarCantidades()
    let codigo = Number(prompt("Ingresa el codigo del producto entre el (1-5)")) -1

    if (codigo < 0 || codigo >= productos.length ){
        alert("Ingrese un codigo valido")
        return
    }

    if(stock[codigo] > 0){
        let pago
        do{
            pago = Number(prompt("Ingresa tu moneda $1"))
            if(pago !== 1){
                alert("Pago incorrecto, solo se acepta $1")
            }
        }while(pago !== 1)
            stock[codigo]--
            alert("has comprado " +productos[codigo]+ " disfrutalo")
        }else{
            let sugerencia = sugerirProducto()
            if(sugerencia){
                alert("Este producto esta agotado, te sugerimos " +sugerencia)
            }else{
                alert("Todos los productos estan agotados")
            }
    }
}

function menu (){
    let opcion 
    do{
        opcion = Number(prompt("\n1 Comprar producto \n2 Mostar inventario \n3 Salir"))

        if(opcion < 0 || opcion > 3){
            alert("Ingrese un numero valido")
            continue
        }

        switch (opcion){
            case 1:
                comprarProducto()
                break
            case 2:
                mostrarCantidades()
                break
            case 3:
                alert("Saliendo de la maquina ....")
                window.location.href = "index.html"
                break
        }

    }while(opcion != 3)
}

menu()