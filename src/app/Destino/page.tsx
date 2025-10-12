import React from "react";
import Link from 'next/link';


const DestinosViaje: React.FC = () => {
  return (
    <div>
      {/* HEADER */}
      <header>
        <h1>RUTAS INTELIGENCIA ARTIFICIAL</h1>
        <nav>
         <Link href="/">Inicio</Link>
          <Link href="/Destino">Destinos</Link>
          <Link href="#">Promociones</Link>
          <Link href="#">Contacto</Link>
        </nav>
        <div className="user-icon"></div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className="container">
        {/* Lado izquierdo: tarjetas verticales */}
        <div className="categorias">
          <div className="tarjeta">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Aventura Familiar"/>
            <div className="tarjeta-content">
              <h3>Aventura Familiar</h3>
              <p>Hasta los más chicos disfrutarán del viaje con actividades seguras, divertidas y llenas de naturaleza.</p>
            </div>
          </div>
          <div className="tarjeta">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="Viaje de pareja"/>
            <div className="tarjeta-content">
              <h3>Viaje de Pareja</h3>
              <p>Para lograr una experiencia inolvidable con momentos únicos, románticos y destinos encantadores.</p>
            </div>
          </div>
          <div className="tarjeta">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Turístico"/>
            <div className="tarjeta-content">
              <h3>Turístico</h3>
              <p>Descubre todo sobre tu próximo destino, desde los paisajes más emblemáticos hasta los secretos locales.</p>
            </div>
          </div>
          <div className="tarjeta">
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80" alt="Cultural"/>
            <div className="tarjeta-content">
              <h3>Cultural</h3>
              <p>Conoce la historia y las tradiciones que envuelven cada punto de interés, y vive la esencia de cada lugar.</p>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="contenido">
          <h1>Diseña tu viaje ideal</h1>
          <p>Usamos diferentes tipos de algoritmos para recomendarte, planificar y darte la mejor experiencia acorde con tus necesidades y gustos.</p>
          {/* Mapa */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0836796625135!2d-99.18838958509347!3d19.442402286879757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f91c6f2f3f3d%3A0xf0b28e25f6b1f2d3!2sIPN%20ESCOM!5e0!3m2!1ses-419!2smx!4v1696892929403!5m2!1ses-419!2smx"
            allowFullScreen
            loading="lazy"
            title="Mapa"
          />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <div className="beneficio">
          <h3>🌎 IA Inteligente</h3>
          <p>Nuestro sistema analiza miles de rutas para recomendarte destinos perfectos y únicos según tus preferencias.</p>
        </div>
        <div className="beneficio">
          <h3>🕒 Ahorra Tiempo</h3>
          <p>Planifica tu viaje en minutos con sugerencias automáticas, itinerarios dinámicos y recomendaciones inmediatas.</p>
        </div>
        <div className="beneficio">
          <h3>💰 Económico</h3>
          <p>Compara y elige opciones que se adapten a tu presupuesto y aprovecha promociones según tu ubicación.</p>
        </div>
      </section>

      {/* FRASE MOTIVACIONAL */}
      <section className="frase">
        <p>“Cada destino tiene una historia, y la tuya apenas comienza.”</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default DestinosViaje;