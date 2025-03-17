let salir = false

let preciosProductos = [500, 1200, 300, 1500, 800]

let hayPreciosAltos = preciosProductos.some(n => n > 1000)

while(!salir){
    if(hayPreciosAltos){
        alert("Si")
    }else{
        alert("No")
    }
    salir = confirm("Desea salir?")
    if(salir){
        window.location.href = "index.html"
    }
}