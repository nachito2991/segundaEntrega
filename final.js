////array de productos

const listaProd = [
    {modelo: "remeras", precio: 8000, stock: "disponible"},
    {modelo: "buzos", precio: 13000, stock: "disponible"},
    {modelo: "pantalones", precio: 10000, stock: "disponible"},
    {modelo: "gorras", precio: 8000, stock: "disponible"},
    {modelo: "camisas", precio: 11000, stock: "disponible"}
  ];
  
  const carrito = [];
  let carritoTotal = 0;

  // funcion para seleccionar productos de la lista de productos
  const agregarAlCarrito = (producto) => {
    const prodEnLista = listaProd.find((prod) => prod.modelo === producto);
    if (prodEnLista) {
      if (prodEnLista.stock !== "disponible") {
        alert("Lo siento, este producto no está disponible en este momento.");
      } else {
        carritoTotal += prodEnLista.precio;
        carrito.push(prodEnLista);
        alert(`"${prodEnLista.modelo}" ha sido agregado al carrito, monto parcial:`+ (carritoTotal)); //});
      }
    } else {
      alert("Lo siento, no se encontró el producto que seleccionaste");
    }
  };
  
  //funcion que muestra la lista de productos, y genera un alert por cada 
  //producto seleccionado, si es 0, arroja que esta vacio.
  // luego creo variable total, y guarda la suma total.

  const mostrarCarrito = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío");
    } else {
      alert("Tu carrito contiene los siguientes productos:");
      carrito.forEach((prod) => alert(`- ${prod.modelo} $${prod.precio}`));
      const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
      alert(`Total a pagar: $${total}`);
    }
  };
  
  let entrada = prompt("Seleccione un producto de la siguiente lista:\n1) Remeras\n2) Buzos\n3) Pantalones\n4) Gorras\nPara finalizar, escriba 'terminado'");
 
  while (entrada !== "terminado") {

    agregarAlCarrito(entrada);
    entrada = prompt("Seleccione otro producto de la siguiente lista Seleccione un producto de la siguiente lista:\n1) Remeras\n2) Buzos\n3) Pantalones\n4) Gorras\nPara finalizar, escriba 'terminado''");
  };


const pago = (formaPago) => {
    if (formaPago == 1) {
        alert("selecciono efectivo, tiene 10% de descuento");
        alert('el monto final es:' + (carritoTotal - (carritoTotal * 0.10)));
        
}else if (formaPago == 2){
        alert("selecciono Tarjeta de credito, tiene 10% de recargo");
        alert('el monto final es: ' + (carritoTotal + (carritoTotal * 0.10)));
}

}

  
  
mostrarCarrito();

let formaPago = prompt("seleccione un metodo de pago, 1)efectivo 2) Tarjeta");
pago(formaPago);