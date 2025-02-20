alert("Bienvenido a SandwichOrder")
let tamaño = Number(prompt("Ingrese el tamaño de sandwich que desea ordernar /N1 sandwich pequeño y /N2 sandwich grande"))
let adicionales = Number(prompt("Ingrese los adicionales que desea: /N1 tocineta /N2 jalapeño /N3 pavo /N4 queso"))

switch(tamaño){
    case 1:
        if(tamaño == 1 && adicionales == 1){
            alert("El sandiwich pequeño cuesta $6000 y el adicional que es la tocineta cuesta $3000 en total seria: $" + (6000 + 3000))
        }else if(tamaño == 1 && adicionales == 2){
            alert("El sandiwich pequeño cuesta $6000 y el adicional que es el jalapeño es gratis en total seria: $" + 6000)
        }else if(tamaño == 1 && adicionales == 3){
            alert("El sandiwich pequeño cuesta $6000 y el adicional que es el pavo cuesta $3000 en total seria: $" + (6000 + 3000))
        }else if(tamaño == 1 && adicionales == 4){
            alert("el sandiwich pequeño cuesta $6000 y el adicional que es el queso cuesta $2500 en total seria: $" + (6000 + 2500))
        }
        if(tamaño == 1 && adicionales == 1 && adicionales == 2){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta y el jalapeño cuestan $3000 en total seria: $" + (6000 + 3000))
        }else if(tamaño == 1 && adicionales == 1 && adicionales == 3){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta y el pavo cuestan $6000 en total seria: $" + (6000 + 6000))
        }else if(tamaño == 1 && adicionales == 1 && adicionales == 4){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta y el queso cuestan $5500 en total seria: $" +(6000 + 5500))
        }
        if(tamaño == 1 && adicionales == 2 && adicionales == 3){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son el jalapeño y el pavo cuestan $3000 en total seria: $" + (6000 + 3000))
        }else if(tamaño == 1 && adicionales == 2 && adicionales == 4){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son el jalapeño y el queso cuestan $2500 en total seria: $" + (6000 + 2500))
        }
        if(tamaño == 1 && adicionales == 3 && adicionales == 4){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son el pavo y el queso cuestan $5500 en total seria: $" + (6000 + 5500))
        }
        if(tamaño == 1 && adicionales == 1 && adicionales == 2 && adicionales == 3){
            alert("el sandiwich pequeño cuesta $6000 y los adicionales que son la tocineta, el jalapeño y el pavo cuestan $6000 en total seria: $" + (6000 + 6000))
        }else if(tamaño == 1 && adicionales == 1 && adicionales == 2 && adicionales == 4){
            alert("el sandwich pequeño cuesta $6000 y los adicionales que son la tocineta, el jalapeño y el queso cuestan $5500 en total seria: $" + (6000 + 5500))
        }else if(tamaño == 1 && adicionales == 1 && adicionales == 3 && adicionales == 4){
            alert("el sandwich pequeño cuesta $6000 y los adicionales que son la tocineta, el pavo y el queso cuestan $8500 en total seria: $" + (6000 + 8500))
        }else if(tamaño == 1 && adicionales == 2 && adicionales == 3 && adicionales == 4){
            alert("el sandwich pequeño cuesta $6000 y los adicionales que son el jalapeño, el pavo y el queso cuestan $5500 en total seria: $" + (6000 + 5500))
        }
        if(tamaño == 1 && adicionales == 1 && adicionales == 2 && adicionales == 3 && adicionales == 4){
            alert("el sandwich pequeño cuesta $6000 y los adicionales que son la tocineta, el jalapeño, el pavo y el queso cuestan $8500 en total seria: $" + (6000 + 8500))
        }
        break
        case 2:
            if(tamaño == 2 && adicionales == 1){
                alert("El sandiwich grande cuesta $12000 y el adicional que es la tocineta cuesta $3000 en total seria: $" + (12000 + 3000))
            }else if(tamaño == 2 && adicionales == 2){
                alert("El sandiwich grande cuesta $12000 y el adicional que es el jalapeño es gratis en total seria: $" + 12000)
            }else if(tamaño == 2 && adicionales == 3){
                alert("El sandiwich grande cuesta $12000 y el adicional que es el pavo cuesta $3000 en total seria: $" + (12000 + 3000))
            }else if(tamaño == 2 && adicionales == 4){
                alert("el sandiwich grande cuesta $12000 y el adicional que es el queso cuesta $2500 en total seria: $" + (12000 + 2500))
            }
            if(tamaño == 2 && adicionales == 1 && adicionales == 2){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta y el jalapeño cuestan $3000 en total seria: $" + (12000 + 3000))
            }else if(tamaño == 2 && adicionales == 1 && adicionales == 3){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta y el pavo cuestan $6000 en total seria: $" + (12000 + 6000))
            }else if(tamaño == 2 && adicionales == 1 && adicionales == 4){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta y el queso cuestan $5500 en total seria: $" +(12000 + 5500))
            }
            if(tamaño == 2 && adicionales == 2 && adicionales == 3){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son el jalapeño y el pavo cuestan $3000 en total seria: $" + (12000 + 3000))
            }else if(tamaño == 2 && adicionales == 2 && adicionales == 4){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son el jalapeño y el queso cuestan $2500 en total seria: $" + (12000 + 2500))
            }
            if(tamaño == 2 && adicionales == 3 && adicionales == 4){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son el pavo y el queso cuestan $5500 en total seria: $" + (12000 + 5500))
            }
            if(tamaño == 2 && adicionales == 1 && adicionales == 2 && adicionales == 3){
                alert("el sandiwich grande cuesta $12000 y los adicionales que son la tocineta, el jalapeño y el pavo cuestan $6000 en total seria: $" + (12000 + 6000))
            }else if(tamaño == 2 && adicionales == 1 && adicionales == 2 && adicionales == 4){
                alert("el sandwich grande cuesta $12000 y los adicionales que son la tocineta, el jalapeño y el queso cuestan $5500 en total seria: $" + (12000 + 5500))
            }else if(tamaño == 2 && adicionales == 1 && adicionales == 3 && adicionales == 4){
                alert("el sandwich grande cuesta $12000 y los adicionales que son la tocineta, el pavo y el queso cuestan $8500 en total seria: $" + (12000 + 8500))
            }else if(tamaño == 2 && adicionales == 2 && adicionales == 3 && adicionales == 4){
                alert("el sandwich grande cuesta $12000 y los adicionales que son el jalapeño, el pavo y el queso cuestan $5500 en total seria: $" + (12000 + 5500))
            }
            if(tamaño == 2 && adicionales == 1 && adicionales == 2 && adicionales == 3 && adicionales == 4){
                alert("el sandwich grande cuesta $12000 y los adicionales que son la tocineta, el jalapeño, el pavo y el queso cuestan $8500 en total seria: $" + (12000 + 8500))
            }
            break
}