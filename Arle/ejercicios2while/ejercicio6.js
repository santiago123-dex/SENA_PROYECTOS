let iniciar = Number(prompt("Desea iniciar (1). Desea salir al menu (2)"))


switch(iniciar){
    case 1:
let x = Number(prompt("Ingrese el primer número"))
let y = Number(prompt("Ingrese el segundo número"))
let z = Number(prompt("Ingrese el tercer número"))



if(x > y && x>z){
    alert("El numero mayor es " +x)
}else if(y>x && y>z){
    alert("El numero mayor es " +y)
}else if(z>x && z>y){
    alert("El numero mayor es " +z)
}
setTimeout(() => {
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))

    if(volver ==1){
        window.location.href="ejercicio2.html"
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