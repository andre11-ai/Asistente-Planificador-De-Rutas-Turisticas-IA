import React from "react";
import Link from 'next/link';


const Educativa: React.FC = () => {
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
        <h2>Centro Educativo de Algoritmos</h2>
        <p>Conoce cómo la inteligencia artificial calcula la mejor ruta para ti.</p>
      </section>

      <main className="container">
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          <div className="card">
            <h3>Algoritmo A*</h3>
            <p>Utiliza heurísticas para estimar la distancia hacia el destino. Es eficiente y común en sistemas de rutas en tiempo real.</p>
          </div>
          <div className="card">
            <h3>Dijkstra</h3>
            <p>Explora todas las rutas posibles y selecciona la más corta sin heurísticas. Ideal cuando se busca precisión absoluta.</p>
          </div>
          <div className="card">
            <h3>Búsqueda en Amplitud (BFS)</h3>
            <p>Explora caminos nivel por nivel; garantiza la ruta más corta si los costos son iguales.</p>
          </div>
          <div className="card">
            <h3>Búsqueda en Profundidad (DFS)</h3>
            <p>Explora caminos en profundidad, útil para análisis o descubrimiento de rutas alternativas.</p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <h3>Visualización conceptual</h3>
          <p style={{ marginBottom: 12 }}>Representación simplificada del proceso de búsqueda entre nodos:</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ width:56, height:56, borderRadius:28, background: 'var(--primary)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700 }}>A</div>
            <div style={{ width:56, height:56, borderRadius:28, background: 'var(--primary)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700 }}>B</div>
            <div style={{ width:56, height:56, borderRadius:28, background: 'var(--primary)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700 }}>C</div>
            <div style={{ width:56, height:56, borderRadius:28, background: 'var(--primary)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700 }}>D</div>
          </div>
        </div>
      </main>

      <footer className="app-footer center" style={{ padding: 16 }}>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Educativa;