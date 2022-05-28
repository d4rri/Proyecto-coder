for (let i = 0; i < 3; i++) {
    
    let username = prompt("Ingrese su nombre:")
    let password = prompt("Ingrese su contraseña:")
    
    if (username == "Agustin" && password == "123456") {
        console.log("Bienvenido",username)
    break

    } else {
        console.warn("No se reconoce el usuario ingresado")
    } 
    continue
}



