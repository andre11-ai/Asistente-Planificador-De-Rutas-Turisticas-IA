import React from "react";
import Link from 'next/link';

const Perfil: React.FC = () => {
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
        <h2>Bienvenido, Sofía</h2>
        <p>Tu panel personal de rutas y preferencias</p>
      </section>

      <main className="container">
        <div style={{ display:'grid', gap:18, gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))' }}>
          <div className="card">
            <h3>Historial de rutas</h3>
            <ul style={{ listStyle:'none', padding:0 }}>
              <li>📍 Ciudad de México → Puebla | Algoritmo: A*</li>
              <li>📍 Guadalajara → León | Algoritmo: Dijkstra</li>
              <li>📍 Monterrey → Saltillo | Algoritmo: BFS</li>
            </ul>
          </div>

          <div className="card">
            <h3>Estadísticas personales</h3>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:8 }}>
              <div style={{ flex:1, background:'#f8f9fb', padding:10, borderRadius:8, textAlign:'center' }}>
                <h4 style={{ margin:6, color:'var(--primary)' }}>+25%</h4>
                <div>Tiempo ahorrado</div>
              </div>
              <div style={{ flex:1, background:'#f8f9fb', padding:10, borderRadius:8, textAlign:'center' }}>
                <h4 style={{ margin:6, color:'var(--primary)' }}>12</h4>
                <div>Rutas completadas</div>
              </div>
              <div style={{ flex:1, background:'#f8f9fb', padding:10, borderRadius:8, textAlign:'center' }}>
                <h4 style={{ margin:6, color:'var(--primary)' }}>A*</h4>
                <div>Algoritmo más usado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop:18 }}>
          <h3>Preferencias de viaje</h3>
          <label>Tipo de viaje preferido:</label>
          <select style={{ marginTop:6 }}>
            <option>Urbano</option>
            <option>Rural</option>
            <option>Aventura</option>
          </select>

          <label style={{ marginTop:10 }}>Modo de transporte preferido:</label>
          <select style={{ marginTop:6 }}>
            <option>Auto</option>
            <option>Bicicleta</option>
            <option>Transporte público</option>
          </select>
        </div>

        <div className="card" style={{ marginTop:18 }}>
          <h3>Retroalimentación</h3>
          <textarea placeholder="Escribe tus comentarios..." style={{ width:'100%', minHeight:100 }} />
          <div style={{ marginTop:10 }}>
            <button style={{ background:'var(--primary)', color:'#fff', border:'none', padding:'10px 14px', borderRadius:8, cursor:'pointer' }}>Enviar</button>
          </div>
        </div>
      </main>

      <footer className="app-footer center" style={{ padding: 16 }}>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Perfil;