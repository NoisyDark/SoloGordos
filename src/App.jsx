import { useState, useEffect } from "react";
import "./styles.css";
import data from "./assets/data.json";

// Simulación de la lógica de clasificación
const rankingValues = {
  CHALLENGER: 1000,
  GRANDMASTER: 900,
  MASTER: 800,
  DIAMOND: 700,
  PLATINUM: 600,
  GOLD: 500,
  SILVER: 400,
  BRONZE: 300,
  IRON: 200,
  Sin_rango: 0,
};

// Función que muestra las secciones
const Header = ({ setSection }) => (
  <header>
    <div className="logo">
      <img src="img/logo2.png" alt="Logo" />
      <h1>SoloGordos</h1>
    </div>
    <nav>
      <button onClick={() => setSection('clasificacion')}>Clasificación</button>
      <button onClick={() => setSection('premios')}>Premios</button>
      <button onClick={() => setSection('streams')}>Streams</button>
    </nav>
    <div className="social">
      <a href="https://x.com/agustinititaaa" target="_blank" rel="noopener noreferrer">
        <img src="img/X.png" alt="Twitter" />
      </a>
      <a href="https://discord.gg/rkvQDshx58" target="_blank" rel="noopener noreferrer">
        <img src="img/disc.png" alt="Discord" />
      </a>
    </div>
  </header>
);


const Clasificacion = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const sortedPlayers = data.datos
      .map((jugador) => {
        const basePoints = rankingValues[jugador.rango] || 0;
        const lpPoints = jugador.lp;
        const divisionPoints = jugador.division > 0 ? jugador.division * 100 : 0;

        return {
          ...jugador,
          totalPoints: basePoints + lpPoints + divisionPoints,
        };
      })
      .sort((a, b) => b.totalPoints - a.totalPoints);

    setJugadores(sortedPlayers);
  }, []);

  return (
    <section id="clasificacion" className="contenido activo">
      <h2>Clasificación</h2>
      <table id="tabla-clasificacion">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Jugador</th>
            <th>Elo</th>
            <th>LP</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.rango}</td>
              <td>{jugador.lp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const Premios = () => (
  <section id="premios" className="contenido">
    <h2>Premios</h2>
    <div className="premios-container">
      <div className="premio">
        <h3>Primer lugar</h3>
        <p>Premio 1</p>
      </div>
      <div className="premio">
        <h3>Segundo lugar</h3>
        <p>Premio 2</p>
      </div>
      <div className="premio">
        <h3>Tercer lugar</h3>
        <p>Premio 3</p>
      </div>
    </div>
  </section>
);


const Streams = () => (
  <section id="streams" className="contenido">
    <h2>Streams</h2>
    <div id="twitch-embed" className="stream-box"></div>
    {/* Tabla de streamers */}
  </section>
);

const Footer = () => (
  <footer>
    <p>© Copyright 2025 SoloGordos. Todos los derechos reservados.</p>
  </footer>
);

export default function App() {
  const [section, setSection] = useState('clasificacion');
console.log(section)
  return (
    <div>
      <Header setSection={setSection} />
      <main>
        {section === 'clasificacion' && <Clasificacion />}
        {section === 'premios' && <Premios />}
        {section === 'streams' && <Streams />}
      </main>
      <Footer />
    </div>
  );
}