import Home from "./Pages/Home";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import './App.css';
import PaginaCarrito from "./Pages/PaginaCarrito";
function App() {
    const [carrito, setCarrito] = useState([]);
    const [pesoTotal, setPesoTotal] = useState(0);

    function agregarAlCarrito(game) {
        const juegoEnCarrito = carrito.find((item) => item.id === game.id);

        if (juegoEnCarrito) {
            alert("Este juego ya está en el carrito.");
            return;
        }

        setCarrito([...carrito, game]);
        setPesoTotal(pesoTotal + game.peso);
    }

    const eliminarDelCarrito = (id) => {
        const juegoAEliminar = carrito.find(juego => juego.id === id);
        if (juegoAEliminar) {
            setCarrito(carrito.filter(item => item.id !== id));
            setPesoTotal(pesoTotal - juegoAEliminar.peso);
        }
    };

    return (
        <Router>
            <div className="App">
                <Header carrito={carrito} pesoTotal={pesoTotal} />
                <Routes>
                    <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/carrito" element={<PaginaCarrito carrito={carrito} pesoTotal={pesoTotal} onEliminar={eliminarDelCarrito} />} /> {/* Nueva ruta */}
                </Routes>
                {/* ***CORRECCIÓN CRUCIAL: Pasar la función eliminarDelCarrito como prop*** */}
               {/* <Carrito carrito={carrito} pesoTotal={pesoTotal} onEliminar={eliminarDelCarrito} /> */}
                
                <Footer/>
            </div>
        </Router>
    );
}

export default App;