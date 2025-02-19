let nombrej1 = prompt ("Ingrese su nombre Jugador 1")
let nombrej2 = prompt ("Ingrese su nombre Jugador 2")

document.getElementById("jugador1").innerText=nombrej1
document.getElementById("jugador2").innerText=nombrej2

var puntosj1 = 0 
var puntosj2 = 0 

var rondaj1 = 1
var rondaj2 = 1
var maxRondas = 3

var jlanzador = 0

function lanzar(numerodejugador){
    if(puedeLanzar(numerodejugador)){
        if(numerodejugador == 1){
            if(rondaj1<=maxRondas){
                var puntos = generarPuntos()
                puntosj1 += puntos
                document.getElementById("j1ronda"+rondaj1).innerText=puntos
                document.getElementById("j1total").innerText=puntosj1
                rondaj1 ++ 
                jlanzador = 2

                mostrarBoton (rondaj1, numerodejugador)


            }
        }
        if(numerodejugador == 2){
            if(rondaj2<=maxRondas){
                var puntos = generarPuntos()
                puntosj2 += puntos
                document.getElementById("j2ronda"+rondaj2).innerText=puntos
                document.getElementById("j2total").innerText=puntosj2
                rondaj2 ++ 
                jlanzador = 1

                mostrarBoton(rondaj2, numerodejugador)
            }
            
        }
    }

    resultado()
}

function puedeLanzar(numerodejugador){
    if(jlanzador == 0){
        return true
    }else if(numerodejugador == jlanzador){
        return true
    }
    return false
}

function generarPuntos(){
    return Math.floor(Math.random()*9)+1
}

function omitir(numerodejugador){
    if(numerodejugador == 1 && rondaj1<=maxRondas){
        rondaj1 += 1
        jlanzador = 2
    }else if(numerodejugador == 2 && rondaj2<=maxRondas){
        rondaj2 += 1
        jlanzador = 1

    }
    resultado()
}

function mostrarBoton(ronda, numerodejugador){
    if (ronda == maxRondas){ 
        document.getElementById("boton-oculto"+numerodejugador).style.display = "inline"
    }
}

function resultado(){
    if(rondaj1 == maxRondas+1){
        if(rondaj2 == maxRondas+1){
            if(puntosj1 > puntosj2){
                alert(" El ganador es :" +nombrej1+" con" +puntosj1)
            }else{
                alert(" El ganador es :" +nombrej2+ "con" +puntosj2)
            }
            setInterval(() => window.location.reload(), 3000)
        }
    }

}

