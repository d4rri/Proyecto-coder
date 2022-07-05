function recuperarObjeto() {
    let filas = ""
    let prod="";
    let llenarCarrito =JSON.parse(localStorage.getItem("carrito")) || ['El carrito esta vacio.'];
    console.log(prod);
        for (prod of llenarCarrito) {
            console.log(prod);
            let precF=new Producto(prod.nombre,prod.precio,prod.iva);
            filas += `<ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${prod.nombre || "el producto no existe"}</h6> 
                            <small class="">${prod.iva || "el iva no existe"}</small>  
                        </div>
                            <span class="">${prod.precio || "el precio no existe"}</span> 
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <p>Total (Pesos Argentinos):</p>
                        <strong>${precF.precioFinal() || "el precio final no existe"}</strong>
                        </li>
                    </ul>`
                    document.getElementById('verCompra').innerHTML = filas;
            }
        }

btnVolver.addEventListener("click", () => {
    location.href = "../pages/cursos.html"
})

btnCompra.addEventListener("click", () => {
    alertar("Su compra ha sido realizada.")
})

function alertar(mensaje) {
    Swal.fire({
        title: 'Gracias por su compra!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}

TotalProductosCarrito = () => {
    debugger
    let prod="";
    let llenarCarrito =JSON.parse(localStorage.getItem("carrito")) || ['El carrito esta vacio.'];
    console.log(prod);
        for (prod of llenarCarrito) {
            let total = carrito.reduce((totalizar, precio), totalizar + prod.precio, 0)
            console.log("total->"+total);
    }
}





recuperarObjeto()
TotalProductosCarrito()