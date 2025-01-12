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
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="/facebook-icon.png" alt="Facebook" /></a> {/* Icono de Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="/twitter-icon.png" alt="Twitter" /></a> {/* Icono de Twitter */}
              {/* Otros iconos sociales */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {anioActual} [Nombre de tu tienda]. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;