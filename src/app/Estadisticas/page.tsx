import React from "react";
import Link from 'next/link';

const Estadisticas: React.FC = () => {
  return (
    <div>
      <header className="app-header">
        <h1>RUTAS INTELIGENCIA ARTIFICIAL</h1>
        <nav>
          <Link href="/">Inicio</Link>{" "}
          <Link href="/vista1">Diseña tu viaje</Link>{" "}
          <Link href="/educativa">Centro educativo</Link>{" "}
          <Link href="/estadisticas">Estadísticas</Link>{" "}
          <Link href="/soporte">Soporte</Link>
        </nav>
        <div className="user-icon" />
      </header>

      <section className="hero">
        <h2>Estadísticas Globales del Sistema</h2>
        <p>Visión general del rendimiento de la IA y comportamiento de los usuarios.</p>
      </section>

      <main className="container">
        <div style={{ display:'grid', gap:18, gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
          <div className="card">
            <h3>Resumen General</h3>
            <div style={{ display:'flex', gap:12, marginTop:12, flexWrap:'wrap' }}>
              <div style={{ flex: '1 1 120px', background:'#f8f9fb', padding:12, borderRadius:8, textAlign:'center' }}>
                <h4 style={{ color:'var(--primary)', margin:'6px 0' }}>1,482</h4>
                <div>Rutas generadas</div>
              </div>
              <div style={{ flex: '1 1 120px', background:'#f8f9fb', padding:12, borderRadius:8, textAlign:'center' }}>
                <h4 style={{ color:'var(--primary)', margin:'6px 0' }}>243</h4>
                <div>Usuarios activos</div>
              </div>
              <div style={{ flex: '1 1 120px', background:'#f8f9fb', padding:12, borderRadius:8, textAlign:'center' }}>
                <h4 style={{ color:'var(--primary)', margin:'6px 0' }}>98%</h4>
                <div>Satisfacción</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Rendimiento de algoritmos</h3>
            <div style={{ marginTop:12 }}>
              <div style={{ display:'flex', justifyContent:'space-between' }}><span>A*</span><span>85%</span></div>
              <div style={{ height:14, background:'#e7edf6', borderRadius:10, marginTop:6 }}><div style={{ height:'100%', width:'85%', background:'var(--primary)', borderRadius:10 }} /></div>

              <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}><span>Dijkstra</span><span>70%</span></div>
              <div style={{ height:14, background:'#e7edf6', borderRadius:10, marginTop:6 }}><div style={{ height:'100%', width:'70%', background:'#4CAF50', borderRadius:10 }} /></div>

              <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}><span>BFS</span><span>60%</span></div>
              <div style={{ height:14, background:'#e7edf6', borderRadius:10, marginTop:6 }}><div style={{ height:'100%', width:'60%', background:'#FF9800', borderRadius:10 }} /></div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop:18 }}>
          <h3>Preferencias de los usuarios</h3>
          <ul style={{ listStyle:'none', padding:0, margin:0 }}>
            <li>🚗 <strong>Tipo de viaje más popular:</strong> Urbano</li>
            <li>🌄 <strong>Más explorado:</strong> Aventura</li>
            <li>💰 <strong>Prioridad:</strong> Económico</li>
            <li>🕒 <strong>Tiempo promedio de ruta:</strong> 38 minutos</li>
          </ul>
        </div>
      </main>

      <footer className="app-footer center" style={{ padding: 16 }}>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Estadisticas;