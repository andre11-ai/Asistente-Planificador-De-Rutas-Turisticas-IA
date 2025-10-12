import React from "react";
import Link from 'next/link';
import '../../public/css/globals.css';

const RutasIA: React.FC = () => {
  return (
    <div>
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

      {/* HERO */}
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Playa" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Lavanda" />
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="Montañas" />
        <div className="overlay">
          <h2>CONSULTA DESTINOS DISPONIBLES</h2>
          <div className="search-box">
            <input type="text" placeholder="Escribe un destino" />
            <button>🔍</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <span role="img" aria-label="ubicación">📍</span>
          <h3>Adaptabilidad de búsqueda</h3>
          <p>Se utilizan los mejores métodos con función de tus necesidades, requerimientos o gustos para tu próximo viaje.</p>
        </div>
        <div className="feature">
          <span role="img" aria-label="avión">✈️</span>
          <h3>Tu viaje, tu ruta</h3>
          <p>Nos adaptamos a cualquier plan, incluso si quieres visitar toda una ciudad, o solamente quieres ver lo que ofrece el paisaje hasta llegar directo a tu destino.</p>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="about">
        <h2>¿Por qué elegir Rutas IA?</h2>
        <p>Somos una plataforma impulsada por inteligencia artificial que encuentra los destinos ideales para ti,
          basándose en tus gustos, presupuesto y estilo de viaje. Te ayudamos a descubrir experiencias únicas y
          rutas personalizadas en cualquier parte del mundo.</p>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios">
        <h2>Lo que dicen nuestros viajeros</h2>
        <div className="cards">
          <div className="card">
            <img src="https://i.pravatar.cc/100?img=1" alt="usuario" />
            <p>“La IA me recomendó un viaje a Grecia y fue espectacular. Todo personalizado.”</p>
            <h4>- Ana M.</h4>
          </div>
          <div className="card">
            <img src="https://i.pravatar.cc/100?img=5" alt="usuario" />
            <p>“Encontré destinos que ni imaginaba y ajustados a mi presupuesto.”</p>
            <h4>- Luis G.</h4>
          </div>
          <div className="card">
            <img src="https://i.pravatar.cc/100?img=7" alt="usuario" />
            <p>“Me encantó cómo el sistema sugiere rutas diferentes cada vez. 10/10.”</p>
            <h4>- Sofía P.</h4>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default RutasIA;