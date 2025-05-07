/* Imagina que estás desarrollando un sistema de control de acceso para una conferencia.
Los asistentes están registrados en un Map donde las claves son sus códigos de
identificación (números) y los valores son sus nombres. El Map inicial contiene: {101 =>
"Carlos", 102 => "María", 103 => "José"}. Necesitas crear una función que verifique si un
código específico está registrado en el Map, utilizando una función flecha, para decidir si se
permite o no el acceso a un asistente.*/

let salir = true
let asistentesRegistrados = new Map([
    [101, "Carlos"],
    [102, "Maria"],
    [103, "Jose"]
])
while(salir){
    let verificarRegistrado = () => {
        let codigo = Number(prompt("Ingrese el codigo"))
        if(asistentesRegistrados.has(codigo)){
            alert(`Persona registrada ${asistentesRegistrados.get(codigo)}`)
        }else{
            alert("No se encuentra registrado")
        }
    }
    verificarRegistrado()
}
