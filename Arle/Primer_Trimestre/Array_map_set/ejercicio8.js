// Arreglo inicial con los proyectos
let proyectos = [
    { nombre: "Proyecto A", presupuesto: 5000 },
    { nombre: "Proyecto B", presupuesto: 8000 }
];

// Función para agregar un nuevo proyecto
function agregarProyecto() {
    let nombre = prompt("Ingrese el nombre del nuevo proyecto:")
    //Se usa el parseFloat para que el usuario solo ingrese lo del sena 
    let presupuesto = parseFloat(prompt("Ingrese el presupuesto del proyecto:"))

    // Validación de datos, El isNaN es para que cuando el usuario ingrese un valor string lo de como invalido
    if (nombre && !isNaN(presupuesto)) {
        let nuevoProyecto = (nombre, presupuesto)
        //Se sube los datos de nuevoProyecto a proyectos mediante un push 
        proyectos.push(nuevoProyecto)
        alert("Proyecto agregado con éxito:\nNombre: " + nombre + "\nPresupuesto: " + presupuesto)
    } else {
        alert("Error: Ingrese un nombre válido y un presupuesto numérico.")
    }

    // Mostrar la lista actualizada de proyectos
    let listaProyectos = "Lista de proyectos actualizada:\n"
    //Con el forEach recorremos el array y extrayendo los datos del array de proyectos, esta es una manera de cosntruir un mensaje
    proyectos.forEach(proyecto => {
        listaProyectos += `• ${proyecto.nombre} - Presupuesto: $${proyecto.presupuesto}\n`
    })
    alert(listaProyectos)
}

agregarProyecto()
