let asistentes = new Map ()
let salir = true

for(let i = 1; i<=1; i++){
    asistentes.set(i, "Ana")
}

let insertarUsuarios = () =>{
while(salir){
        let accion = Number(prompt("\n1 Ingresar el nombre \n2 Revisar registros"))
        if(accion == 1){
            let nombre = prompt("Ingrese su nombre")
            if(nombre){

                let nuevoId = asistentes.size + 1
                asistentes.set(nuevoId, nombre)
                alert("El usuario " +nombre+ " quedo registrado correctamente")
            }else{
                alert ("Ingrese un nombre valido")
            }
        }
        else if(accion == 2){
            let registrados = ""
            asistentes.forEach((nombre, id) => {
                registrados += ` ID ${id} - nombre ${nombre}\n`
            })
            alert("Los usuarios registrados son: \n " +registrados)
        }
    }
}
insertarUsuarios()
    

