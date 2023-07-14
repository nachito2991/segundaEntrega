///Arreglo de productos
const mercaderia = [
  {id:1,
      cantidad: 1,
      titulo:"Remeras",
      precio: 8000,
      descripcion:"Remeras manga corta.",
      img: "./img/remeraSantaCruz.jpg"},

  {id:2,
      cantidad: 1,
      titulo:"Buzos",
      precio: 13000,
      descripcion:"Buzos Canguros.",
      img: "./img/santaCruzLogo.jpg"},

  {id:3,
      cantidad: 1,
      titulo:"Pantalones Jogging",
      precio: 11000,
      descripcion:"pantalones Joggins Frizzados.",
      img: "./img/joggins.jpg"},
  
  {id:4,
      cantidad: 1,
      titulo:"Gorras",
      precio: 8000,
      descripcion:"Viseras planas y Caps.",
      img: "./img/gorras1.jpg"},     
      
  {id:5,
      cantidad: 1,  
      titulo:"Camisas Leñadoras",
      precio: 11000,
      descripcion:"Camisas Leñadoras Vans.",
      img: "./img/leñadorasVans.jpg"},        
  
  
  {id:6,
      cantidad: 1,
      titulo:"Gorros",
      precio: 6000,
      descripcion:"Gorros Bennnies.",
      img:"./img/gorros1.jpg" } ,       
]

//defino un array vacio para el carrito y una variable en cero para el total
let carrito = []
let total = 0;

//caputo los id Item y carrito del HTML, y creo una variable con una cadena vacia.
const items = document.querySelector("#items")
const carritoHTML = document.querySelector ("#carrito")
let productoHTML= '';


//Agrego tarjetas a la tienda usando el metodo foreach para recorrer el array mercaderia, por cada producto, genero una tarjeta dentro de la variable productoHTML que se ingresara a la constante Items, 
function agregarProductos() {
    mercaderia.forEach((producto) => {
      let productoHTML = `
    
            <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
            <div class="card text-light bg-dark" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion} </p>
                    <p>$${producto.precio}</p>
                    <button type="button" class="btn btn-success" onclick="agregarProductoAlCarrito(${producto.id})" >Añadir al carrito </button>


                </div>
            </div>
            </div>
            `;
   items.innerHTML +=productoHTML


    });
  }
  agregarProductos();
  

//funcion para que se muestre en el carrito los productos seleccionados. Se genera un cadena vacia carritoHTML.innerText="", luego se generalas tarjetas por el metodo foreach. luego productoHTML se suma a CarritoHTML
  
function renderizarCarrito() {
  carritoHTML.innerHTML = "";

  carrito.forEach((producto) => {
    const productoHTML = `
      <div class="producto-en-carrito">
      <img class="card-img-top" src="${producto.img}" alt="Card image cap">
        <div class="descripcion">
          <h3>${producto.titulo}</h3>
          <p>Precio: $${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <button type="button" class="btn btn-outline-danger" onclick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
        </div>
      </div>
    `;
    carritoHTML.innerHTML += productoHTML;
    
  });

}


//Se agregan productos al carrito con el metodo .find detro del array productos, utilizando el ID, se agrega al array carrito usando push
  
  function agregarProductoAlCarrito(id) {
    const productoEncontrado = mercaderia.find((producto) => producto.id === id); 
    carrito.push(productoEncontrado);
    renderizarCarrito();
    calcularTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
//Eliminamos productos usado el metodo find.
  function eliminarProductoDelCarrito(id) {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
  
    if (productoEnCarrito) {
      // El producto está en el carrito, eliminarlo
      carrito = carrito.filter((producto) => producto.id !== id);
      renderizarCarrito();
      calcularTotal();
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
    
//Sumamos todos los productos usando nuevamente el foreach

  function calcularTotal() {
     total = 0;
  
    carrito.forEach((prod) => {
      total += prod.precio ;
    });

    const t = document.getElementById("total");
    t.innerHTML = `<h5>$${total}</h5>`;
  }
  
  //****Editar Carrito***/
  
    renderizarCarrito();
    calcularTotal();
  
  //capturamos el boton vaciar, se agrega eventlistener, y se vuelve el carrito a 0
  
  function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    calcularTotal();
  
  }
  
  const vaciar = document.querySelector("#boton-vaciar");
  vaciar.addEventListener("click", vaciarCarrito);


  //funcion para pagar, agrego boton, se agrega eveto listener. utilizo libreria para generar un alert




const realizarPago = document.querySelector("#boton-comprar");
realizarPago.addEventListener("click", ()=> {
  Swal.fire({
    title: 'Gracias por tu compra!, el monto final es $'+total,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  vaciarCarrito()
});




//LocalStorage


function carritoStorage() {
  
  localStorage.setItem("carrito" ,JSON.stringify(carrito));

}

// Función para cargar el carrito desde LocalStorage
function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    vaciarCarrito()
    calcularTotal();
  }
}


cargarCarritoDesdeLocalStorage();

//Selecciono el botón "Mis compras" del HTML
const misCompras = document.querySelector("#mis-compras");

//Función para mostrar los productos guardados en una tarjeta
function mostrarComprasGuardadas() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    let productosHTML = "";
    carrito.forEach(producto => {
      productosHTML += `
        <div class="card">
          <img src="${producto.img}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text fw-bold">$${producto.precio}</p>
          </div>
        </div>
      `;
    });
    carritoHTML.innerHTML = productosHTML;
    calcularTotal();
  } else {
    Swal.fire('No hay compras guardadas!')
  }
}

//Evento click del botón "Mis compras"
misCompras.addEventListener("click", mostrarComprasGuardadas);

//boton para eliminar compras.
const botonBorrarCompras = document.querySelector("#borrar-compras");
botonBorrarCompras.addEventListener("click", borrarComprasGuardadas);

function borrarComprasGuardadas() {
  localStorage.removeItem("carrito");
  Swal.fire('Productos Eliminados!')
vaciarCarrito()
  
}