let pitido = prompt("La pc emite un pitido? Si/No").toLowerCase();
let disco = prompt("el disco del pc gira? Si/No").toLowerCase();
let unidad = prompt("La unidad del pc gira?? Si/No").toLowerCase();

if(pitido == "si" && disco == "si"){
    alert("Esta averiada")
}else if(pitido == "si" && unidad == "si"){
    alert("Pongase en contacto con un tecnico")
}else if(pitido == "no" && disco == "no"){
    alert("Traiga la computadora para repararla en la central")
}else if(pitido == "no" && unidad == "no"){
    alert("Compruebe las conexiones de altavoces")
}else if(pitido == "si" && unidad == "no"){
    alert("Verifique los contactos de la unidad")
}
window.location.href="index.html"