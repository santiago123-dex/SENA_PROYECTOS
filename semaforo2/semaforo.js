let semaforo = "encendido"; 

let color = "amarillo";  

let mensaje;

if (semaforo === "encendido") {
  
  if (color === "rojo") {
    mensaje = "El semáforo está rojo, debe parar.";
  } else if (color === "verde") {
    mensaje = "El semáforo está verde, puede seguir.";
  } else if (color === "amarillo") {
    mensaje = "El semáforo está amarillo, prepárese.";
  } else {
    mensaje = "El color del semáforo es desconocido.";
  }
} else {
  mensaje = "El semáforo está dañado.";
}

console.log(mensaje);




