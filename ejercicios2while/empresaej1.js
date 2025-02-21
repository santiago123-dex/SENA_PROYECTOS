let iniciar = Number(prompt("Desea iniciar (1). Desea salir al menu (2)"))

switch(iniciar){
case 1:
    let nombre = prompt("ingrese su nombre")
    let horas = Number(prompt( nombre+ " Cuantas horas trabajo en la semana"))


    if(horas<=10){
        alert( nombre+ " Su salario es : " +horas*30000)
    }else if(horas>10){
        alert( nombre+ " Su salario es : " +horas*33000)
    }

    setTimeout(() => {
        let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

        if(volver ==1){
            window.location.href="empresaej1.html"
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

    default : 
        alert("Error numero 404")
} 
