
import { Link } from 'react-router-dom';

const Header = ({ carrito, pesoTotal }) => {
  return (
    <header className="header">
      <h1>PlayTheGame</h1>
      <nav className="nav-header"> {/* Contenedor para la navegacion */}
          <Link to="/">Inicio</Link>
          <Link to="/carrito">Carrito</Link> {/* Enlace al carrito */}
      </nav>
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