import { useState, useEffect } from "react";
import "./styles.css";
import data from "./assets/data.json";

const value = {
  IRON: 1000,
  BRONZE: 2000,
  SILVER: 3000,
  GOLD: 4000,
  PLATINUM: 5000,
  EMERALD: 6000,
  DIAMOND: 7000,
  MASTER: 8000,
  GRAND_MASTER: 9000,
  CHALLENGER: 10000,
};
const arrMock = [400, 300, 200, 100];

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
    setJugadores(data.datos);
  }, []);

  return (
    <section className="contenido activo">
      <h2>Clasificación</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Jugador</th>
            <th>Elo</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.rango}</td>
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
