/* eslint-disable react/prop-types */
import { juegos } from "../json/juegos";
import { useState } from "react";


const Home = ({ agregarAlCarrito }) => { // Recibe agregarAlCarrito como prop
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda
  
  const juegosFiltrados = juegos.filter((game) =>
    game.Nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="HomeClase">
      <input // Input de búsqueda
        type="text"
        placeholder="Buscar juego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="barra-busqueda" // Clase para estilos
      />
      <div className="games-container">
        {juegosFiltrados.map((game) => ( // Usa juegosFiltrados
          <div key={game.id} className="game-card">
            <h2>{game.Nombre}</h2>
            <img src={game.img} alt={game.Nombre}/>
            <p>{game.peso} GB</p>
            <button name="agregarJuego" onClick={() => agregarAlCarrito(game)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;