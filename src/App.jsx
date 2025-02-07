import { useState, useEffect } from "react";
import "./styles.css";
import data from "./assets/data.json";

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

const arrMock = [0, 100, 200, 300, 400]; // Puntos extra por división

const Header = ({ setSection }) => (
  <header>
    <div className="logo">
      <img src="img/logo2.png" alt="Logo" />
      <h1>SoloGordos</h1>
    </div>
    <nav>
      <button onClick={() => setSection("clasificacion")}>Clasificación</button>
      <button onClick={() => setSection("premios")}>Premios</button>
      <button onClick={() => setSection("streams")}>Streams</button>
    </nav>
    <div className="social">
      <a
        href="https://x.com/agustinititaaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/X.png" alt="X" />
      </a>
      <a
        href="https://discord.gg/rkvQDshx58"
        target="_blank"
        rel="noopener noreferrer"
      >
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
        const divisionPoints =
          jugador.division > 0 ? arrMock[jugador.division] || 0 : 0;

        return {
          ...jugador,
          totalPoints: basePoints + lpPoints + divisionPoints,
        };
      })
      .sort((a, b) => b.totalPoints - a.totalPoints);

    setJugadores(sortedPlayers);
  }, [data]);

  return (
    <section className="contenido activo">
      <h2>Clasificación</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Jugador</th>
            <th>Elo</th>
            <th>Victorias</th>
            <th>Derrotas</th>
            <th>Win Rate</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.rango}</td>
              <td>{jugador.victorias}</td>
              <td>{jugador.derrotas}</td>
              <td>{jugador.winrate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const Premios = () => (
  <section className="contenido">
    <h2>Premios</h2>
    <p>Información sobre los premios.</p>
  </section>
);

const Streams = () => (
  <section className="contenido">
    <h2>Streams</h2>
    <p>Previsualización de streams en vivo.</p>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 SoloGordos. Todos los derechos reservados.</p>
  </footer>
);

export default function App() {
  const [section, setSection] = useState("clasificacion");
  return (
    <div>
      <Header setSection={setSection} />
      <main>
        {section === "clasificacion" && <Clasificacion />}
        {section === "premios" && <Premios />}
        {section === "streams" && <Streams />}
      </main>
      <Footer />
    </div>
  );
}
