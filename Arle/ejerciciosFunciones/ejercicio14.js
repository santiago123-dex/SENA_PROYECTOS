function iniciarPrograma(){
alert("Bienvenido a SandwichOrder")
let tamaño  
let tocineta = true
let jalapeño = false
let pavo = false
let queso = false

do {
    tamaño = Number(prompt("Ingrese el tamaño de sándwich que desea ordenar:\n1 - Sándwich pequeño\n2 - Sándwich grande"))
} while (tamaño !== 1 && tamaño !== 2)

    switch(tamaño){
        case 1:
            if(tamaño == 1 && tocineta == true && jalapeño == true && pavo == true && queso == true){
                alert("el sandwich pequeño cuesta $6000 y los adicionales que son la tocineta, el jalapeño, el pavo y el queso cuestan $8500 en total seria: $" + (6000 + 8500))
            }
            if(tamaño == 1 && tocineta == true && jalapeño == true && pavo == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta, el jalapeño y el pavo cuestan $6000 en total seria: $" + (6000 + 6000))
            }else if(tamaño == 1 && tocineta == true && jalapeño == true && queso == true){
                alert("el sandwich pequeño cuesta $6000 y los adicionales que son la tocineta, el jalapeño y el queso cuestan $5500 en total seria: $" + (6000 + 5500))
            }else if(tamaño == 1 && tocineta == true && pavo == true && queso == true){
                alert("el sandwich pequeño cuesta $6000 y los adicionales que son la tocineta, el pavo y el queso cuestan $8500 en total seria: $" + (6000 + 8500))
            }else if(tamaño == 1 && jalapeño == true && pavo == true && queso == true){
                alert("el sandwich pequeño cuesta $6000 y los adicionales que son el jalapeño, el pavo y el queso cuestan $5500 en total seria: $" + (6000 + 5500))
            }
            if(tamaño == 1 && tocineta == true && jalapeño == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta y el jalapeño cuestan $3000 en total seria: $" + (6000 + 3000))
            }else if(tamaño == 1 && tocineta == true && pavo == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta y el pavo cuestan $6000 en total seria: $" + (6000 + 6000))
            }else if(tamaño == 1 && tocineta == true && queso == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta y el queso cuestan $5500 en total seria: $" +(6000 + 5500))
            }
            if(tamaño == 1 && jalapeño == true && pavo == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son el jalapeño y el pavo cuestan $3000 en total seria: $" + (6000 + 3000))
            }else if(tamaño == 1 && jalapeño == true && queso == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son el jalapeño y el queso cuestan $2500 en total seria: $" + (6000 + 2500))
            }
            if(tamaño == 1 && pavo == true && queso == true){
                alert("el sandiwich pequeño cuesta $6000 y los adicionales que son el pavo y el queso cuestan $5500 en total seria: $" + (6000 + 5500))
            }
            if(tamaño == 1 && tocineta == true){
                alert("El sandiwich pequeño cuesta $6000 y el adicional que es la tocineta cuesta $3000 en total seria: $" + (6000 + 3000))
            }else if(tamaño == 1 && jalapeño == true){
                alert("El sandiwich pequeño cuesta $6000 y el adicional que es el jalapeño es gratis en total seria: $" + 6000)
            }else if(tamaño == 1 && pavo == true){
                alert("El sandiwich pequeño cuesta $6000 y el adicional que es el pavo cuesta $3000 en total seria: $" + (6000 + 3000))
            }else if(tamaño == 1 && queso == true){
                alert("el sandiwich pequeño cuesta $6000 y el adicional que es el queso cuesta $2500 en total seria: $" + (6000 + 2500))
            }
            break
            case 2:
                if(tamaño == 2 && tocineta == true && jalapeño == true && pavo == true && queso == true){
                    alert("el sandwich grande cuesta $12000 y los adicionales que son la tocineta, el jalapeño, el pavo y el queso cuestan $8500 en total seria: $" + (12000 + 8500))
                }
                if(tamaño == 2 && tocineta == true && jalapeño == true && pavo == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta, el jalapeño y el pavo cuestan $6000 en total seria: $" + (12000 + 6000))
                }else if(tamaño == 2 && tocineta == true && jalapeño == true && queso == true){
                    alert("el sandwich grande cuesta $12000 y los adicionales que son la tocineta, el jalapeño y el queso cuestan $5500 en total seria: $" + (12000 + 5500))
                }else if(tamaño == 2 && tocineta == true && pavo == true && queso == true){
                    alert("el sandwich grande cuesta $12000 y los adicionales que son la tocineta, el pavo y el queso cuestan $8500 en total seria: $" + (12000 + 8500))
                }else if(tamaño == 2 && jalapeño == true && pavo == true && queso == true){
                    alert("el sandwich grande cuesta $12000 y los adicionales que son el jalapeño, el pavo y el queso cuestan $5500 en total seria: $" + (12000 + 5500))
                }
                if(tamaño == 2 && tocineta == true && jalapeño == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta y el jalapeño cuestan $3000 en total seria: $" + (12000 + 3000))
                }else if(tamaño == 2 && tocineta == true && pavo == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta y el pavo cuestan $6000 en total seria: $" + (12000 + 6000))
                }else if(tamaño == 2 && tocineta == true && queso == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta y el queso cuestan $5500 en total seria: $" +(12000 + 5500))
                }
                if(tamaño == 2 && jalapeño == true && pavo == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son el jalapeño y el pavo cuestan $3000 en total seria: $" + (12000 + 3000))
                }else if(tamaño == 2 && jalapeño == true && queso == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son el jalapeño y el queso cuestan $2500 en total seria: $" + (12000 + 2500))
                }
                if(tamaño == 2 && pavo == true && queso == true){
                    alert("el sandiwich grande cuesta $12000 y los adicionales que son el pavo y el queso cuestan $5500 en total seria: $" + (12000 + 5500))
                }
                if(tamaño == 2 && tocineta == true){
                    alert("El sandiwich grande cuesta $12000 y el adicional que es la tocineta cuesta $3000 en total seria: $" + (12000 + 3000))
                }else if(tamaño == 2 && jalapeño == true){
                    alert("El sandiwich grande cuesta 1212000 y el adicional que es el jalapeño es gratis en total seria: $" + 12000)
                }else if(tamaño == 2 && pavo == true){
                    alert("El sandiwich grande cuesta $12000 y el adicional que es el pavo cuesta $3000 en total seria: $" + (12000 + 3000))
                }else if(tamaño == 2 && queso == true){
                    alert("el sandiwich grande cuesta $12000 y el adicional que es el queso cuesta $2500 en total seria: $" + (12000 + 2500))
                }
                break
            }
        let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menu (2)"))
        if(volver == 1){
            window.location.href = "ejercicio14.html"
        }else if(volver == 2){
            window.location.href = "index.html"
        }else{
            alert("Error de datos")
        }    
}

iniciarPrograma()