const identificacion = 1016022056
const password = "mamiolguis123"
const nombre = "Santi"

if(identificacion == 1016022056 && password == "mamiolguis123"){
    console.log("Su nombre es:" +nombre+ "")
    }else if(identificacion != 1016022056 && password == "mamiolguis123"){
        console.log("idenficacion incorrecta")
    }else if(password != "mamiolguis123" && identificacion == 1016022056){
        console.log("Contraseña incorrecta")
    }else if(password != "mamiolguis123" && identificacion != 1016022056){
        console.log("Los dos datos son incorrectos")
    }else{
        console.log("No existe usuario")
    }
