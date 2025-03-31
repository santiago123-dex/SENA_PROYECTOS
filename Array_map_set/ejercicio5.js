/*Suponga que estás desarrollando un sistema para una tienda que registra los códigos de
productos vendidos en un día. Utilizas un Set para almacenar estos códigos, ya que no
quieres duplicados. El Set inicial contiene: {1001, 1002, 1003}. Necesitas verificar si un
código específico, como 1002, está en el Set para confirmar si ya se vendió ese producto
hoy, o si un nuevo código, como 1004, no está registrado aún.*/

let productosVendidos = new Set([1001, 1002, 1003])
let salir = false

let verificar = () =>{
    while(!salir){
        let codigo = Number(prompt("Ingrese el codigo del producto"))
        if(productosVendidos.has(codigo)){
            alert(`El producto con codigo ${codigo} se encuentra vendido`)
        }else{
            productosVendidos.add(codigo)
            alert(`EL producto con codigo ${codigo} se le vendio`)
        }
        salir = confirm("Desea salir")
        if(salir){
            window.location.href = "index.html"
        }
    }
    
}
verificar()