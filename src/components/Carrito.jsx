
const Carrito = ({ carrito, pesoTotal, onEliminar }) => {
  if (carrito.length === 0) {
    return <p key="empty-cart">El carrito está vacío.</p>; // Key agregada
  }

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id} className="carrito-item">
            <img src={item.img} alt={item.Nombre} className="carrito-item-imagen" />
            <div className="carrito-item-info">
              <h3>{item.Nombre}</h3>
              <p>Peso: {item.peso} GB</p>
            </div>
            <button onClick={() => onEliminar(item.id)} className="carrito-item-eliminar">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Peso total: {pesoTotal.toFixed(2)} GB</p>
    </div>
  );
};

export default Carrito;