class Producto {
    constructor(nombre, stock, precio, iva) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva
    }
        precioFinal(){
            return this.precio * this.iva
        }

        descuentoStock(unidades){
            return this.stock = this.stock - unidades
        }
 }

 function Productos (nombre, stock, precio, iva) {
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
}

          
         
    




