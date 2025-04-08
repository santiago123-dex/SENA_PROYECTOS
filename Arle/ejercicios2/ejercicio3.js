let tipoDeLavadora = prompt("Desea una lavadora grande o pequeña?")
let horas = Number(prompt("Cuantas horas deseas usar la lavadora"))
let cantidad = Number(prompt("Cuantas lavadoras deseas alquilar"))


if(tipoDeLavadora == "grande" && cantidad < 3){
    alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +horas *cantidad*4000)
    }else if (tipoDeLavadora == "grande" && cantidad>3){
        costo = horas*cantidad *4000
        descuento = costo*3/100
        costoTotal = costo - descuento
        alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +costoTotal)
    }if(tipoDeLavadora == "pequeña" && cantidad <3){
        alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +horas *cantidad*3000)
    }else if(tipoDeLavadora == "pequeña" && cantidad>3){
        costo = horas*cantidad *3000
        descuento = costo*3/100
        costoTotal = costo - descuento
        alert("Costo total por alquilar " +cantidad+ " lavadoras tipo " +tipoDeLavadora+ " por " +horas+ " horas: " +costoTotal)
    }
    window.location.href="index.html"