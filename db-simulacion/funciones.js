
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}

// Devolver la lista de categorias almacenadas en el localStorage
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Devolver la lista de banners almacenados en el localStorage
function obtenerBanners() {
  const map = obtenerMap("banners");
  return map.values();
}

// Devolver la lista de productos almacenados en el localStorage
function obtenerProductos(categoria = "todos") {
    const productos = JSON.parse(localStorage.getItem("productos")) || {};
    //return Object.values(productos);
    let producto = [];
    if (categoria == null || categoria === "todos") {
        producto = Object.values(productos);
    } else {
        producto = Object.values(productos).filter(prod => prod.categoria === categoria);
    }
    return producto;
}

//
// Funciones para la manipulacion de carrito de compras
//

// Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
  }

  // Mostrar los productos añadidos al carrito de compras
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = "";
    let precio = 0;
  
    carrito.forEach((productos, posicion) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between mb-2";
      li.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <div class="row">
            <h6 class="my-0">${productos.titulo}</h6>
            <small>${productos.precio}</small>
          </div>
          <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarProducto(${posicion})">
            <i class="fas fa-times"></i>
          </a>
        </div>
      `;
      carritoContainer.appendChild(li);
      precio += productos.precio; // precio = precio + curso.precio;
    });
    const totalElement = document.getElementById('total');
    totalElement.textContent = precio.toFixed(2);
  }

  // Agregar un producto al carrito de compras
function agregarProducto(producto) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
  
  // Eliminar un curso del carrito de compras
  function eliminarProducto(index) {
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
  
  // Vaciar el carrito de compras
  function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
