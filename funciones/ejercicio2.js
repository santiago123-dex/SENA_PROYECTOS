let palabra = prompt("Ingrese una palabra")

function contarVocales(palabra){
    let contador = 0
    let vocales = "aeiouAEUIO"
    for(let letra of palabra){
        if(vocales.includes(letra)){
            contador ++
        }
    }
    return contador
}

alert("Numero de vocales es " + contarVocales(palabra))