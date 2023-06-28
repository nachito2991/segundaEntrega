//LISTA DE OBJETOS  //NO CAMBIAR!
 let listaProd = [
    {modelo: "remeras",precio: 8000, stock:"disponible"},
    {modelo: "buzos", precio: 13000, stock:"disponible"},
    {modelo: "pantalones",precio: 10000, stock:"disponible"},
    {modelo: "gorras", precio:8000, stock:"disponible"},
    {modelo: "camisas", precio:11000, stock:"disponible"},]
 
let carritoLista = [];
let carritoTotal = 0;

//INGRESO DE PRODUCTOS y MUESTRA DE ARTICULOS SELECCIONADOS




const seleccionProductos = (entrada) => {
    while (entrada != "terminado") {
        ingresados += entrada + "\n";
        

        switch (entrada) {
            case "remeras":
                carritoLista.push("remeras"),
                carritoTotal +=  listaProd[0].precio;
                alert("Seleccionaste remeras, el valor es: $ " + listaProd[0].precio);
                alert("total:$"+ carritoTotal);
                break;
            case "buzos":
                carritoLista.push("buzos"),
                carritoTotal += listaProd[1].precio 
                alert("Seleccionaste buzos, el valor es: $ " +listaProd[1].precio);
                alert("total:$"+ carritoTotal);
                break;
            case "pantalones":
                carritoLista.push("pantalones")
                carritoTotal += listaProd[2].precio
                alert("Seleccionaste pantalones, el valor es: $ " + listaProd[2].precio);
                alert("total:$"+ carritoTotal);
                break;
            case "gorras":
                carritoLista.push("gorras")
                carritoTotal += listaProd[3].precio,
                alert("Seleccionaste gorras, el valor es: $ " +listaProd[3].precio);
                alert("total:$"+ carritoTotal);
                break;
            case "camisas":
                carritoLista.push("camisas")
                carritoTotal += listaProd[4].precio,
                alert("Seleccionaste camisas, el valor es: $ " +listaProd[4].precio);
                alert("Total:$"+ carritoTotal);
                break;
            default:
                alert("Ingreso mal el producto")
                break;
        }
        entrada = prompt("seleccione un producto de la siguiente lista \n 1)remeras \n 2)buzos \n 3)pantalones \n 4)gorros \n Para finalizar coloque terminado.");
    }
  
    alert(' los productos seleccionados son:'+'\n'+ ingresados);

}



//funcion sumar productos.
//Forma de pago


const pago = (formaPago) => {
    if (formaPago == 1) {
        alert("selecciono pago en efectivo");
        alert("el total es" + '$'+ (carritoTotal - (carritoTotal *0.10)));

    } else if (formaPago == 2) {
        alert("selecciono pago con tarjeta")
        alert("Tiene 10% de recargo, el total seria"+' '+ '$'+ (carritoTotal + ( carritoTotal * 0.10)));

    }
    else {
        alert("seleccione un metodo de pago");
    }
}


let entrada = prompt("seleccione un producto de la siguiente lista \n 1)remeras \n 2)buzos \n 3)pantalones \n 4)gorros \n Para finalizar coloque terminado.");
let ingresados = '';
seleccionProductos(entrada);

let formaPago = prompt("ingrese metodo de pago 1) efectivo, 2) tarjeta");
pago(formaPago);





document.write("EL TOTAL A PAGAR ES" + carritoTotal);
