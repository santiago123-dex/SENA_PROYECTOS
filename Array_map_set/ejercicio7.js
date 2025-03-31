/*Suponga que estás desarrollando un sistema para una escuela que necesita organizar los
puntajes de los estudiantes en un examen. Tienes un arreglo de puntajes [85, 92, 78, 95, 88]
y deseas crear un Map donde las claves sean los índices del arreglo (0, 1, 2, etc.) y los
valores sean los puntajes correspondientes. Luego, quieres agregar un nuevo puntaje 90 al
Map con la clave correspondiente al siguiente índice disponible (en este caso, 5).*/

let puntajes = [85, 92, 78, 95, 88]
let mapaPuntajes = new Map()


//recorremos el array de puntajes y llenamos el map con los indices y las claves
puntajes.forEach((puntaje, indice) =>{
    mapaPuntajes.set(indice, puntaje)
})


   // Creamos una variable que muestra un mensaje y hace un salto de linea, con el forEach recorremos el map y traemos los dos valores y luego juntamos registros con la clave y el valor, al final llamamos a registros con un alert
let mostrarNotas = () =>{
    let registros = "Los registro son \n"
    mapaPuntajes.forEach((valor, clave) =>{
        registros += ` ID ${clave}: ${valor}\n`
    })
    alert(registros)
}


let insertarNota = () =>{
    let salir = false

    while(!salir){
        let nota = Number(prompt("Ingrese su nota"))    

        //Verificamos si nota ya esta registrada, se usan los 3 puntos para convertirlo en un array, ademas de eso se usan los parentesis y uso el includes para verificar si la nota esta dentro del array si la nota esta devuelveun true si no esta devuelve un false
        if([...mapaPuntajes.values()].includes(nota)){
            alert(`Su nota ya esta registrada`)
            continue // Vuelve a pedir la nota sin salir del bucle
        }

        //registramos una nueva nota, el size es para determinar el tamaño del Map y luego usamos el set para agregar la nueva nota con el indice correcto y la nota que se pregunto
        let nuevoId = mapaPuntajes.size
        mapaPuntajes.set(nuevoId, nota)

        alert(`Su nota ${nota} quedo registrada correctamente`)

        salir = confirm("Desea salir?")
            if(salir){
            window.location.href = "ejercicio7.html"
        }
    }
}

let menu = () =>{
    let opcion
    do{
        opcion = Number(prompt("1. Ingresar su nota \n2 Mirar las notas \n3 Salir"))
        if(opcion < 0 || opcion >3){
            alert(`Ingrese un numero valido`)
            continue
        }
        switch(opcion){
            case 1:
                insertarNota()
                break
            case 2:
                mostrarNotas()
                break
            case 3:
                alert("Saliendo del programa")
                window.location.href = "index.html"
                break
        }
    }while(opcion != 3)
}

menu()



