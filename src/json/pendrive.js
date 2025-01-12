const contenedorTarjetas = document.getElementById("productos-container");
const carritoLista = document.getElementById("carrito-lista");
let carrito = obtenerCarrito(); // Obtener el carrito del localStorage
let pesoTotal = calcularPesoTotal(carrito); // Calcular el peso inicial del carrito

function obtenerCarrito() {
  const carritoJSON = localStorage.getItem('carrito');
  return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function calcularPesoTotal(carrito) {
    return carrito.reduce((total, producto) => total + producto.peso, 0);
}

function mostrarCarrito() {
  carritoLista.innerHTML = '';
  pesoTotal = calcularPesoTotal(carrito); // Recalcular el peso total cada vez que se muestra el carrito

  if (carrito.length === 0) {
    carritoLista.innerHTML = '<p>El carrito está vacío.</p>';
  } else {
    carrito.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `${producto.Nombre} (${producto.peso} GB)`;
      carritoLista.appendChild(item);
    });
  }

  // Mostrar el peso total en el HTML
  const pesoTotalElement = document.getElementById("peso-total");
  if(pesoTotalElement){
    pesoTotalElement.textContent = `Peso total: ${pesoTotal} GB`;
  }
}

function agregarAlCarrito(producto) {
  if (pesoTotal + producto.peso <= 32) {
    carrito.push(producto);
    guardarCarrito(carrito);
    mostrarCarrito();
    alert(`Se agregó ${producto.Nombre} al carrito.`);
  } else {
    alert(`No hay suficiente espacio. El peso actual es ${pesoTotal} GB. No puedes agregar ${producto.Nombre} que pesa ${producto.peso} GB.`);
  }
}

function crearTarjetasProductosInicio(productos) {
    let html = '';
    productos.forEach(producto => {
        html += `
            <div class="tarjeta-producto">
                <img src="./ART/${producto.img}" alt="${producto.id}">
                <h3>${producto.Nombre}</h3>
                <p class="precio">${producto.precio}</p>
                <button class="agregar-carrito" data-producto-id="${producto.id}">Agregar al carrito</button>
            </div>`;
    });
    contenedorTarjetas.innerHTML = html;

    contenedorTarjetas.querySelectorAll(".agregar-carrito").forEach(button => {
        button.addEventListener("click", () => {
          const productoId = button.dataset.productoId;
          const producto = productos.find(p => p.id === parseInt(productoId));
          if(producto){
            agregarAlCarrito(producto);
          }else{
            console.error("Producto no encontrado");
          }
        });
    });
}

fetch('juegos.js')
  .then(response => response.json())
  .then(juegos => {
    crearTarjetasProductosInicio(juegos);
    mostrarCarrito(); // Mostrar el carrito al cargar la página
  })
  .catch(error => console.error('Error al cargar el JSON:', error));