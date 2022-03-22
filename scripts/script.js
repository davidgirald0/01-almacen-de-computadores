const btnCalc = document.getElementById("btnCantCompu");
const compComprado = document.getElementById("compComprados");
const valCompra = document.getElementById("valCompra");
const valDesc = document.getElementById("valDesc");
const valTotal = document.getElementById("total");
const infoDesc = document.getElementById("infoDescuento");
const btnOtraCant = document.getElementById("btnOtraCant");


function compra(cantidad){
    let valorDesc = 0;
    let valorTotal;
    const valComputador = 900000;                                           //Precio del computador
    let valorCompra = cantidad * valComputador;
    valCompra.setAttribute("value", valorCompra);                           //Valor de la compra
    
    if(valorCompra<1000000){                                                
        valorDesc = 0;                                                      // 0% descuento
        valorTotal = valorCompra * (1-(valorDesc/100));                     // Valor total con descuento
        valDesc.setAttribute("value", `${valorDesc}%`);                     // Input valor descuento
        valTotal.setAttribute("value", valorTotal);                         // Input valor Total de la compra
        infoDesc.setAttribute('style', "color: red;");                      // Cambio de color rojo
        infoDesc.textContent = "¡No hay descuento para esta compra!";       // Texto info descuento
    }else if(valorCompra > 1000000 && valorCompra < 1999999){
        valorDesc = 5;                                                      // 5% descuento
        valorTotal = valorCompra * (1-(valorDesc/100));                     // Valor total con descuento
        valDesc.setAttribute("value", `${valorDesc}%`);                     // Input valor descuento
        valTotal.setAttribute("value", valorTotal);                         // Input valor Total de la compra
        infoDesc.textContent = `Su descuento es del ${valorDesc}%`;         // Texto info descuento
    }else if(valorCompra > 2000000 && valorCompra < 2999999){
        valorDesc = 10;                                                     // 10% descuento
        valorTotal = valorCompra * (1-(valorDesc/100));                     // Valor total con descuento                 
        valDesc.setAttribute("value", `${valorDesc}%`);                     // Input valor descuento
        valTotal.setAttribute("value", valorTotal);                         // Input valor Total de la compra
        infoDesc.textContent = `Su descuento es del ${valorDesc}%`;         // Texto info descuento            
    }else if(valorCompra > 3000000 && valorCompra < 4999999){
        valorDesc = 15;                                                     // 15% descuento
        valorTotal = valorCompra * (1-(valorDesc/100));                     // Valor total con descuento 
        valDesc.setAttribute("value", `${valorDesc}%`);                     // Input valor descuento
        valTotal.setAttribute("value", valorTotal);                         // Input valor Total de la compra
        infoDesc.textContent = `Su descuento es del ${valorDesc}%`;         // Texto info descuento
    }else if(valorCompra > 5000000){
        valorDesc = 20;                                                     // 20% descuento
        valorTotal = valorCompra * (1-(valorDesc/100));                     // Valor total con descuento
        valDesc.setAttribute("value", `${valorDesc}%`);                     // Input valor descuento
        valTotal.setAttribute("value", valorTotal);                         // Input valor Total de la compra
        infoDesc.textContent = `Su descuento es del ${valorDesc}%`;         // Texto info descuento
    }
}

btnCalc.addEventListener("click", ()=>{                 //BOTON CALCULAR
    document.querySelector(".cantCompu").setAttribute('style', "visibility: hidden; display: none;")    //Oculta el cuadro de la cantidad de Comp
    document.querySelector(".contenedor").setAttribute('style', "visibility: visible; display:block;")
    cantidad = compComprado.value;
    
    compra(cantidad)
});

btnOtraCant.addEventListener("click", ()=>{
    document.querySelector(".cantCompu").setAttribute('style', "visibility: visible; display:block;")
    document.querySelector(".contenedor").setAttribute('style', "visibility: hidden; display:none;")
    document.getElementById("compComprados").value = "";
    valCompra.setAttribute("value", "");
    valDesc.setAttribute("value", "");                          // Input valor descuento
    valTotal.setAttribute("value", "");                         // Input valor Total de la compra
    infoDesc.textContent = ""; 
    infoDesc.setAttribute('style', "color: black;");
})
