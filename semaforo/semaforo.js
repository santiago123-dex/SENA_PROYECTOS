let estadoSemaforo = null;
let timerId = null;

function encenderSemaforo() {
  estadoSemaforo = "encendido";
  const h1 = document.createElement("h1");
  h1.textContent = "Santi"
  document.body.appendChild(h1)
  cambiarLuz();
}

function apagarSemaforo() {
  estadoSemaforo = "apagado";
  clearTimeout(timerId);
  resetearLuces();
}

function cambiarLuz() {
  if (estadoSemaforo === "encendido") {
    let luces = ["rojo", "amarillo", "verde"];
    let index = 0;

    function cambiar() {
      if (estadoSemaforo === "apagado") return;

      resetearLuces();
      document.getElementById(luces[index]).style.opacity = 1;
      index = (index + 1) % luces.length;
      timerId = setTimeout(cambiar, 3000);
    }

    cambiar();
  }
} 

function resetearLuces() {
  let luces = document.querySelectorAll('.luz');
  luces.forEach(luz => luz.style.opacity = 0.3);
}
