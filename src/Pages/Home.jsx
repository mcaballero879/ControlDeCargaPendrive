import { useState, useEffect } from "react";
import { juegos } from "../json/juegos";

const Home = ({ agregarAlCarrito }) => {
  const [busqueda, setBusqueda] = useState("");
  const [juegosFiltrados, setJuegosFiltrados] = useState([]);
 

  useEffect(() => {
    if (busqueda === "") {
        setJuegosFiltrados([]); // No muestra nada si la búsqueda está vacía
        return;
    }

    const resultados = juegos.filter((game) =>
      game.Nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setJuegosFiltrados(resultados);
  }, [busqueda]);

  return (
    <div className="HomeClase">
      <input
        type="text"
        placeholder="Buscar juego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="barra-busqueda"
      />
      <div className="games-container">
        {juegosFiltrados.length > 0 ? ( // Solo renderiza si hay resultados
          juegosFiltrados.map((game) => (
            <div key={game.id} className="game-card">
              <h2>{game.Nombre}</h2>
              <img src={game.img} alt={game.Nombre}  />
              <p>{game.peso} GB</p>
              <button name="agregarJuego" onClick={() => agregarAlCarrito(game)}>
                Agregar al carrito
              </button>
            </div>
          ))
        ) : busqueda !== "" ? ( //Mensaje si no hay resultados y la busqueda no esta vacia
            <p>No se encontraron juegos.</p>
        ) : (
            <p>Comienza buscando un juego</p>
        )}
      </div>
    </div>
  );
};

export default Home;