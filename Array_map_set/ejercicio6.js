/*Imagina que estás desarrollando un sistema para un club de membresía que utiliza un Set
para registrar los números de identificación de los socios activos. El Set inicial contiene:
{5001, 5002, 5003}. Ahora, un nuevo socio con el número de identificación 5004 se une al
club, y necesitas agregar este número al Set. Dado que Set no permite duplicados, si
intentas agregar un número ya existente, como 5001, no debería afectar el conjunto.*/

let sociosActivos = new Set([5001, 5002, 5003])
let salir = false

let agregarSocio = () =>{
    while(!salir){
        let codigo = Number(prompt("Ingrese su codigo"))
        if(sociosActivos.has(codigo)){
            alert(`El codigo ${codigo}, ya esta registrado`)
        }else{
            sociosActivos.add(codigo)
            alert(`Codigo ${codigo} agregado correctamente`)
        }
        salir = confirm("Desea salir?")
        if(salir){
            window.location.href = "index.html"
        }
    }
}
agregarSocio()
