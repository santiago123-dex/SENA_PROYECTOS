let nombre = prompt("ingrese su nombre")
let horas = Number(prompt( nombre+ " Cuantas horas trabajo en la semana"))


if(horas<=10){
    alert( nombre+ " Su salario es : " +horas*30000)
}else if(horas>10){
    alert( nombre+ " Su salario es : " +horas*33000)
    window.location.href="index.html"
}
window.location.href="index.html"