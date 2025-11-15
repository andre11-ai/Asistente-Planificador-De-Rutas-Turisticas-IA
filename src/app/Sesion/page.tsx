import React from "react";
import Link from 'next/link';

const Login: React.FC = () => {
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

      <main className="container" style={{ paddingTop: 24 }}>
        <div style={{ maxWidth: 420, margin: '0 auto' }}>
          <div className="card">
            <h3 style={{ textAlign:'center' }}>Iniciar Sesión</h3>
            <p style={{ textAlign:'center', color:'var(--muted)' }}>Accede a tu cuenta para ver tus rutas personalizadas y estadísticas.</p>

            <form>
              <label style={{ display:'block', marginTop:8 }}>Correo electrónico</label>
              <input type="email" placeholder="ejemplo@correo.com" required />

              <label style={{ display:'block', marginTop:12 }}>Contraseña</label>
              <input type="password" placeholder="••••••••" required />

              <div style={{ marginTop:14 }}>
                <button style={{ width:'100%', padding:12, background:'var(--primary)', color:'#fff', border:'none', borderRadius:8, cursor:'pointer' }}>Entrar</button>
              </div>

              <div style={{ textAlign:'center', marginTop:12 }}>
                <a href="#" style={{ color:'var(--primary)' }}>¿Olvidaste tu contraseña?</a>
                <div style={{ marginTop:8 }}>¿No tienes cuenta? <a href="#" style={{ color:'var(--primary)' }}>Regístrate aquí</a></div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="app-footer center" style={{ padding: 16 }}>
        <p>© 2025 Rutas Inteligencia Artificial | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Login;