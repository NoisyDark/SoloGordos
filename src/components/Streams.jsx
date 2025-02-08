import { useEffect, useRef } from "react";

const streamers = [
    { name: "SoloGordos", twitch: "sologordos_tv", twitter: "agustinititaaa", youtube: "SoloGordos", discord: "rkvQDshx58" },
    { name: "OtroStreamer", twitch: "otrostreamer", twitter: "otrostreamer", youtube: "otrostreamer", discord: "otrostreamer" },
    // Agrega más streamers aquí
];

const Streams = () => {
    const twitchRef = useRef(null);
    const canalTwitch = "massiux";

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
                        <th>X (Twitter)</th>
                        <th>YouTube</th>
                        <th>Discord</th>
                    </tr>
                </thead>
                <tbody>
                    {streamers.map((streamer, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{streamer.name}</td>
                            <td><a href={`https://www.twitch.tv/${streamer.twitch}`} target="_blank" rel="noopener noreferrer">🔴 Twitch</a></td>
                            <td><a href={`https://x.com/${streamer.twitter}`} target="_blank" rel="noopener noreferrer">🐦 Twitter</a></td>
                            <td><a href={`https://www.youtube.com/@${streamer.youtube}`} target="_blank" rel="noopener noreferrer">▶️ YouTube</a></td>
                            <td><a href={`https://discord.gg/${streamer.discord}`} target="_blank" rel="noopener noreferrer">💬 Discord</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Streams;
