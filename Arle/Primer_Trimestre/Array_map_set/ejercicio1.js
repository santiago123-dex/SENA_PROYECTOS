let salir = false

let codigoLibros = [10, 25, 60, 45, 80, 15, 70]

let filtrados = codigoLibros.filter( n => n > 50)

while(!salir){
    alert(filtrados)
    salir = confirm("Desea salir?")
    if(salir){
        window.location.href = "index.html"
    }
}