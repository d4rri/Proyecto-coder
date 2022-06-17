const IVALOCAL=1.21; 

const productos = [];

const carrito = [];

const lista = document.getElementById("lista") 

const inputEmail = document.querySelector("#floatingInput")

const inputPassword = document.querySelector("#floatingPassword")

const btnSubmit = document.querySelector("#submit")

const inputs = document.querySelectorAll("input")


btnSubmit.addEventListener("mousemove", () => {
    btnSubmit.title = "Haga clic para enviar sus datos"
})

btnSubmit.addEventListener("mouseover", () => {
    btnSubmit.className = "w-100 btn-lg bg-dark"
})

btnSubmit.addEventListener("mouseout", () => {
    btnSubmit.className = "w-100 btn btn-lg btn-primary"
})

inputEmail.addEventListener("keydown", (e) => {
    console.log(e.key)
    })


class Producto {
    constructor(nombre, id, precio, iva) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.iva = iva
    }
        precioFinal(){
            return parseFloat((this.precio * IVALOCAL).toFixed(2))
        }
 }


function creoID() {
    return parseInt(Math.random() * 10000)
}

function agregarProducto() {
    let nombre = prompt("ingrese el nombre del producto a agregar:")
    let precio = prompt("ingrese el precio del producto a agregar:")
    productos.push(new Producto(nombre, creoID(), precio, IVALOCAL))
    cargarProductos() 
}



function generadorAutomatico() {
    productos.push(new Producto("Curso auto-maquillaje",creoID(), 8000, IVALOCAL))
    productos.push(new Producto("Curso de pieles",creoID(), 6000, IVALOCAL))
    productos.push(new Producto("Curso de ojos",creoID(), 4000, IVALOCAL))
    productos.push(new Producto("Curso de delineados",creoID(), 5000, IVALOCAL))
    productos.push(new Producto("Curso pieles glow",creoID(), 4000, IVALOCAL))
    productos.push(new Producto("Curso maquillaje profesional",creoID(), 10000, IVALOCAL)) 
}

function buscarProducto() {
    let prod = prompt("Ingrese el nombre del producto a buscar:")
        if (prod !== "") {
            let resultado = productos.find( p => p.nombre == prod)               
            console.log(resultado);
    } else {
        console.error("Ingrese un producto valido.")
    }
}

function calcularCarrito() {
    console.log("TOTAL DEL CARRITO")
    let total = carrito.reduce( (totalizar, c) => totalizar + c.precio, 0)
    console.log("total->"+total);
    console.log(productos);
}

function calcularPrecioCuotas(precio, cuotas) {
    return (parseInt(precio / cuotas).toFixed(2));
}

function cargarProductos() {
    lista.innerHTML = ""
    for (producto of productos) {
        const fila =`<tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.id}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.precioFinal()}</td>
                    <tr>`
        lista.innerHTML += fila
    }
}

inputEmail.addEventListener("input", () => {
    console.clear()
    console.log(inputEmail.value)
})

btnSubmit.addEventListener("submit", validarForm)

function validarForm(e) {
    e.preventDefault()
}
 


generadorAutomatico();
calcularCarrito();
calcularPrecioCuotas();
agregarProducto();


