

const Header = ({ carrito, pesoTotal }) => {
  return (
    <header className="header">
      <h1>PlayTheGame</h1> {/* Título del sitio */}
      <div className="carrito-header">
        {carrito.length === 0 ? (
            <span>Carrito Vacio</span>
        ) : (
            <span>{carrito.length} items - {pesoTotal.toFixed(2)} GB</span>
        )}
      </div>
    </header>
  );
};

export default Header;