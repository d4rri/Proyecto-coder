    let curso = prompt("¿que curso desea comprar?")    
        switch (curso){
            case"Curso auto-maquillaje":
              alert("su compra es de : "+ producto1.precioFinal())  
             break

            case"Curso de pieles":   
                alert("su compra es de : "+ producto2.precioFinal())  
                break

            case"Curso de ojos": 
                alert("su compra es de : "+ producto3.precioFinal())  
                break

            case"Curso de delineados":
                alert("su compra es de : "+ producto4.precioFinal())  
                break

            case"Curso pieles glow":        
                alert("su compra es de : "+ producto5.precioFinal())   
                break

            case"Curso maquillaje profesional":
                alert("su compra es de : "+ producto6.precioFinal())  
                break

            default:   
                alert("El curso seleccionado no existe")  
                break;
         }