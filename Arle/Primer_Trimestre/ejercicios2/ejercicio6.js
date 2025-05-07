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
window.location.href="index.html"