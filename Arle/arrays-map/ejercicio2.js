let saldo = 0; // Variable para almacenar el saldo actual del usuario
let registro = new Map(); // Mapa para almacenar los últimos 5 movimientos con un identificador
let contador = 0; // Contador para asignar claves únicas a los registros

function menu() {
    let opcion;
    do {
        // Menú de opciones para el usuario
        opcion = Number(prompt("¿Qué acción desea hacer? \n1. Depositar \n2. Retirar \n3. Consultar saldo \n4. Registro de transacciones \n5. Salir"));
        
        // Validar si la opción ingresada es correcta
        if (opcion < 1 || opcion > 5) {
            alert("Opción incorrecta");
            continue;
        }
        
        // Ejecutar la función correspondiente según la opción elegida
        switch (opcion) {
            case 1:
                depositar();
                break;
            case 2:
                retirar();
                break;
            case 3:
                consultarSaldo();
                break;
            case 4:
                mostrarRegistros();
                break;
            case 5:
                alert("Saliendo del menú");
                window.location.href = "index.html"; // Redirigir a otra página
                break;
        }
    } while (opcion !== 5);
}

function depositar() {
    let deposito = Number(prompt("¿Cuánto desea depositar?"));
    if (deposito > 0) {
        saldo += deposito; // Sumar el depósito al saldo
        agregarRegistro("Depósito: " + deposito); // Agregar el movimiento al registro
        alert("Su depósito fue exitoso. Su saldo es " + saldo);
    } else {
        alert("Monto inválido");
    }
}

function retirar() {
    let retiro = Number(prompt("¿Cuánto desea retirar?"));
    if (retiro > 0 && retiro <= saldo) {
        saldo -= retiro; // Restar el retiro del saldo
        agregarRegistro("Retiro: " + retiro); // Agregar el movimiento al registro
        alert("Retiro exitoso. Su saldo es " + saldo);
    } else {
        alert("Monto inválido o insuficiente");
    }
}

function agregarRegistro(movimiento) {
    if (registro.size >= 5) {
        let primeraClave = registro.keys().next().value; // Obtener la primera clave
        registro.delete(primeraClave); // Eliminar el movimiento más antiguo
    }
    registro.set(++contador, movimiento); // Agregar el nuevo movimiento con una clave única
}

function mostrarRegistros() {
    if (registro.size === 0) {
        alert("No hay registros");
    } else {
        // Usamos map para recorrer y enumerar los últimos movimientos
        let historial = "Últimos 5 movimientos:\n" + 
            Array.from(registro.entries()).map(([key, mov]) => `${key}. ${mov}`) // Formatea cada entrada del Map como "clave. movimiento"
            .join("\n"); // Une los elementos en un solo string con saltos de línea
        
        /* Ejemplo de salida en el alert si hay registros:
            Últimos 5 movimientos:
            1. Depósito: 100
            2. Retiro: 50
            3. Depósito: 200
        */
        alert(historial);
    }
}

function consultarSaldo() {
    alert("Su saldo total es de: " + saldo);
}

menu();
