import Carrito from './Carrito'; // Importa el componente Carrito

const PaginaCarrito = ({ carrito, pesoTotal, onEliminar }) => {
  return (
    <div className="pagina-carrito"> {/* Agrega una clase para estilos */}
        <h1>Tu Carrito de Compras</h1>
      <Carrito carrito={carrito} pesoTotal={pesoTotal} onEliminar={onEliminar} />
    </div>
  );
};

export default PaginaCarrito;