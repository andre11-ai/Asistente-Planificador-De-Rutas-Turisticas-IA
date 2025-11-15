import React from "react";
import Link from 'next/link';

const Soporte: React.FC = () => {
  return (
    <div>
      <header className="app-header">
        <h1>RUTAS INTELIGENCIA ARTIFICIAL</h1>
        <nav>
          <Link href="/">Inicio</Link>{" "}
          <Link href="/vista1">Diseña tu viaje</Link>{" "}
          <Link href="/soporte">Soporte</Link>
        </nav>
        <div className="user-icon" />
      </header>

      <section className="hero">
        <h2>Centro de Soporte y Retroalimentación</h2>
        <p>¿Tienes dudas, sugerencias o encontraste un error? Estamos aquí para ayudarte.</p>
      </section>

      <main className="container">
        <div style={{ display:'grid', gap:18, gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))' }}>
          <div className="card">
            <h3>Enviar comentario o reporte</h3>
            <form>
              <label style={{ display:'block', marginTop:8 }}>Tipo de mensaje:</label>
              <select>
                <option>Sugerencia</option>
                <option>Reporte de error</option>
                <option>Consulta general</option>
              </select>

              <label style={{ display:'block', marginTop:8 }}>Nombre:</label>
              <input type="text" placeholder="Tu nombre..." />

              <label style={{ display:'block', marginTop:8 }}>Correo electrónico:</label>
              <input type="email" placeholder="correo@ejemplo.com" />

              <label style={{ display:'block', marginTop:8 }}>Mensaje:</label>
              <textarea placeholder="Escribe aquí tu mensaje..." style={{ minHeight:120 }} />

              <div style={{ marginTop:10 }}>
                <button style={{ background:'var(--primary)', color:'#fff', border:'none', padding:'10px 12px', borderRadius:8, cursor:'pointer' }}>Enviar mensaje</button>
              </div>
            </form>
          </div>

          <div className="card">
            <h3>Preguntas frecuentes (FAQ)</h3>
            <details style={{ marginBottom:10 }}>
              <summary style={{ fontWeight:600, color:'var(--primary)' }}>¿Cómo calcula la IA la mejor ruta?</summary>
              <p style={{ marginTop:8 }}>El sistema utiliza distintos algoritmos (A*, Dijkstra) y datos de tráfico, preferencias y restricciones.</p>
            </details>

            <details style={{ marginBottom:10 }}>
              <summary style={{ fontWeight:600, color:'var(--primary)' }}>¿Puedo guardar mis rutas favoritas?</summary>
              <p style={{ marginTop:8 }}>Sí, en tu perfil podrás ver y guardar rutas frecuentes.</p>
            </details>

            <div style={{ marginTop:18 }}>
              <h4 style={{ margin:6, color:'var(--primary)' }}>Contacto directo</h4>
              <p>📧 agreval.escom@gmail.com<br />💬 Chat en vivo (9:00 a 18:00 hora México)<br />☎️ +52 56 1372 8265</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer center" style={{ padding: 16 }}>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Soporte;