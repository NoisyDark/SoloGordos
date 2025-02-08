import { useEffect, useRef } from "react";

const streamers = [
    { name: "GORDOBONDIOLA", twitch: "G0rdo_bondiola"},
    { name: "okarun imissmomo", twitch: "K3vin_89"},
    { name: "ElSeñorDeLaNoche", twitch: "massiux"},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    { name: "", twitch: ""},
    // Agrega más streamers aquí
];

const Streams = () => {
    useEffect(() => {
    const canalTwitch = "massiux";
    const embedContainer = document.getElementById("twitch-embed");

      // Si ya existe un iframe dentro de #twitch-embed, lo eliminamos antes de agregar uno nuevo
    if (embedContainer?.querySelector("iframe")) {
        embedContainer.innerHTML = "";
    }

      // Crear el nuevo embed de Twitch
    new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "400",
        channel: canalTwitch,
        layout: "video",
        autoplay: false,
    });

      // Redireccionar al hacer clic en el reproductor
    embedContainer?.addEventListener("click", () => {
        window.open(`https://www.twitch.tv/${canalTwitch}`, "_blank");
    });
    }, []);
    return (
        <section id="streams" className="contenido">
            <h2>Streams</h2>

            {/* Contenedor del stream */}
            <div ref={twitchRef} id="twitch-embed" className="stream-box"></div>

            {/* Tabla de streamers */}
            <h3>Lista de Streamers</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Streamer</th>
                        <th>Twitch</th>
                    </tr>
                </thead>
                <tbody>
                    {streamers.map((streamer, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{streamer.name}</td>
                            <td><a href={`https://www.twitch.tv/${streamer.twitch}`} target="_blank" rel="noopener noreferrer">🔴 Twitch</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Streams;
