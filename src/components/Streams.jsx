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
    const twitchRef = useRef(null);
    const canalTwitch = "agustinitita";

    useEffect(() => {
        if (window.Twitch && twitchRef.current) {
            new window.Twitch.Embed(twitchRef.current.id, {
                width: "100%",
                height: "400",
                channel: canalTwitch,
                layout: "video",
                autoplay: false,
            });

            // Redireccionar al hacer clic en el reproductor
            twitchRef.current.addEventListener("click", () => {
                window.open(`https://www.twitch.tv/${canalTwitch}`, "_blank");
            });
        }
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
