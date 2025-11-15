import React from "react";
import Link from 'next/link';

const ResultadoRuta: React.FC = () => {
  return (
    <div>
      <header className="app-header">
        <h1>RUTAS INTELIGENCIA ARTIFICIAL</h1>
        <nav>
          <Link href="/">Inicio</Link>{" "}
          <Link href="/vista1">Diseña tu viaje</Link>{" "}
          <Link href="/perfil">Perfil</Link>{" "}
          <Link href="/soporte">Soporte</Link>
        </nav>
        <div className="user-icon" />
      </header>

      <section className="hero">
        <h2>Resultados detallados de tu ruta</h2>
        <p>Visualiza el mapa, tiempos estimados y comparativa entre algoritmos.</p>
      </section>

      <main className="container">
        <div style={{ display:'grid', gap:18 }}>
          <div className="card">
            <h3>Mapa</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0836796625135!2d-99.18838958509347!3d19.442402286879757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f91c6f2f3f3d%3A0xf0b28e25f6b1f2d3!2sIPN%20ESCOM!5e0!3m2!1ses-419!2smx!4v1696892929403!5m2!1ses-419!2smx"
              style={{ width: '100%', height: 360, border: 'none', borderRadius: 8 }}
              aria-hidden={false}
            />
          </div>

          <div className="card">
            <h3>Detalles del recorrido</h3>
            <div style={{ display:'flex', gap:12, marginTop:8 }}>
              <div style={{ flex:1, background:'#f8f9fb', padding:12, borderRadius:8, textAlign:'center' }}>
                <div style={{ color:'var(--primary)', fontWeight:700 }}>2 h 35 min</div>
                <div style={{ color:'var(--muted)' }}>Tiempo estimado</div>
              </div>
              <div style={{ flex:1, background:'#f8f9fb', padding:12, borderRadius:8, textAlign:'center' }}>
                <div style={{ color:'var(--primary)', fontWeight:700 }}>186 km</div>
                <div style={{ color:'var(--muted)' }}>Distancia</div>
              </div>
            </div>
            <div style={{ marginTop:12 }}>Modo: Auto — Algoritmo: A*</div>
          </div>

          <div className="card">
            <h3>Puntos del recorrido</h3>
            <table style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead>
                <tr style={{ background:'#f8f9fb', color:'var(--primary)' }}>
                  <th style={{ padding:10, borderBottom:'1px solid #eee' }}>#</th>
                  <th style={{ padding:10, borderBottom:'1px solid #eee' }}>Ubicación</th>
                  <th style={{ padding:10, borderBottom:'1px solid #eee' }}>Tiempo estimado</th>
                  <th style={{ padding:10, borderBottom:'1px solid #eee' }}>Distancia acumulada</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding:10 }}>1</td><td>IPN ESCOM</td><td>0 min</td><td>0 km</td></tr>
                <tr><td style={{ padding:10 }}>2</td><td>Centro Histórico</td><td>35 min</td><td>32 km</td></tr>
                <tr><td style={{ padding:10 }}>3</td><td>Atlixco, Puebla</td><td>1 h 25 min</td><td>110 km</td></tr>
                <tr><td style={{ padding:10 }}>4</td><td>Puebla Centro</td><td>2 h 35 min</td><td>186 km</td></tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Comparativa entre algoritmos</h3>
            <div style={{ marginTop:8 }}>
              <div style={{ display:'flex', justifyContent:'space-between' }}><span>A*</span><span>2h 35m</span></div>
              <div style={{ height:14, background:'#e7edf6', borderRadius:10, marginTop:6 }}><div style={{ height:'100%', width:'85%', background:'var(--primary)', borderRadius:10 }} /></div>

              <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}><span>Dijkstra</span><span>2h 48m</span></div>
              <div style={{ height:14, background:'#e7edf6', borderRadius:10, marginTop:6 }}><div style={{ height:'100%', width:'78%', background:'#4CAF50', borderRadius:10 }} /></div>

              <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}><span>BFS</span><span>3h 05m</span></div>
              <div style={{ height:14, background:'#e7edf6', borderRadius:10, marginTop:6 }}><div style={{ height:'100%', width:'64%', background:'#FF9800', borderRadius:10 }} /></div>

              <p style={{ color:'var(--muted)', marginTop:10 }}>*Valores ilustrativos.</p>
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

export default ResultadoRuta;