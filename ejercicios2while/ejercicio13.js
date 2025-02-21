let operador = Number(prompt("Seleccione su operador /N1 tigo /N2 claro /N3 movistar"))
let minutos = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos"))

switch(operador){
    case 1:
        alert("Tigo: cargo fijo $45000, valor minuto internacional $200, $valor paquete de datos $12000, el valor total es: $" + (45000 + (minutos * 200) + 12000))
        break
    case 2:
        alert("Claro: cargo fijo $30000, valor minuto internacional $100, $valor paquete de datos $18000, el valor total es: $" + (30000 + (minutos * 100) + 18000))
        break
    case 3:
        alert("Movistar: cargo fijo $40000, valor minuto internacional $250, $valor paquete de datos $8000, el valor total es: $" + (40000 + (minutos * 250) + 8000))
        break
    default:
        alert("El numero ingresado no coincide con ningun operador registrado")
}
