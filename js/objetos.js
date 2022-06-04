let curso = prompt("¿que curso desea comprar?")
class Producto {
    constructor(nombre, stock, precio, iva) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva

        this.precioFinal = function () {
            return this.precio * this.iva
        }
        this.descuentoStock = function (unidades) {
            this.stock = this.stock - unidades
        }
     
switch (curso){
        case"Curso auto-maquillaje":
            console.log(producto1.precioFinal)
            break
        case"Curso de pieles":
            console.log(producto2.precioFinal)
            break
        case"Curso de ojos":
            console.log(producto3.precioFinal)
            break
        case"Curso de delineados":
            console.log(producto4.precioFinal)
            break
        case"Curso pieles glow":
            console.log(producto5.precioFinal)
            break
        case"Curso maquillaje profesional":
            console.log(producto6.precioFinal)
            break
        }
    }
}


       
   

            

    console.log("El precio final es de:", precioFinal)



        
     


//let username = prompt("Ingrese su nombre:")
//let password = prompt("Ingrese su contraseña:")


//     if (username == "Agustin" && password == "123456"){
//           console.log("Bienvenido",username)}             
//          else {
//              console.warn("No se reconoce el usuario ingresado")
//        }
//let curso = prompt("¿que curso desea comprar?")
//if (curso =="Curso auto-maquillaje","Curso de pieles", "Curso de ojos", "Curso de delineados", "Curso pieles glow", "Curso maquillaje profesional"){ 
//if (curso=="Curso de pieles")                                                            
                   
            
                                             
         
    




