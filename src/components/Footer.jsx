import "../CSS/footer.css"
const Footer = () => {
    const anioActual = new Date().getFullYear(); // Obtiene el año actual
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Información</h4>
            <ul>
              <li><a href="/acerca-de">Acerca de nosotros</a></li> {/* Enlace a "Acerca de" */}
              <li><a href="/contacto">Contacto</a></li> {/* Enlace a "Contacto" */}
              {/* Otros enlaces de información */}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Soporte</h4>
            <ul>
              <li><a href="/faq">Preguntas frecuentes</a></li> {/* Enlace a "FAQ" */}
              <li><a href="/envios">Envíos y devoluciones</a></li> {/* Enlace a información de envíos */}
              {/* Otros enlaces de soporte */}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-icons"> {/* Contenedor para iconos sociales */}
              <a href="https://www.facebook.com/marketplace/profile/1566374584/" target="_blank" ><img src="./public/facebook.png" alt="Facebook" /></a> {/* Icono de Facebook */}
              <a href="https://www.instagram.com/playthegame879/" target="_blank" ><img src="./public/instagram.png" alt="Instagram" /></a> {/* Icono de Instagram */}
              {/* Otros iconos sociales */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {anioActual} PlayTheGame. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;