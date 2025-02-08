import { useEffect, useRef } from "react";

const streamers = [
    { name: "GORDOBONDIOLA", twitch: "G0rdo_bondiola"},
    { name: "okarun imissmomo", twitch: "K3vin_89"},
    { name: "ElSeñorDeLaNoche", twitch: "massiux"},
    { name: "Cagáste Sobrina", twitch: "Framrin"},
    { name: "PELADØWN", twitch: "franqqe"},
    { name: "PanaderoTroll", twitch: "elgranpachuly"},
    { name: "MataDowns666", twitch: "Noisy_Dark"},
    { name: "LaBurgerDeWanda", twitch: "fabitob5"},
    { name: "FANATICODEVT", twitch: "5gnit"},
    { name: "R00se", twitch: "R00se"},
    { name: "gorda m0g0lica", twitch: "medicenl0la"},
    { name: "momito", twitch: "mamamomoARG"},
    { name: "PERON TE CARREA", twitch: "sirskela"},
    { name: "akalisamee", twitch: "Akalisamee"},
    { name: "Más bien loquita", twitch: "Daaani"},
    { name: "ZOE DE BOCA", twitch: "Venustiaissleeping"},
    { name: "AOV Loan", twitch: "ezcasti"},
    { name: "KyaneZero", twitch: "------"},
    { name: "Nandower", twitch: "Cherrytomatito266"},
    { name: "TimberoDepresivo", twitch: "T1Reizor"},
    { name: "Miku", twitch: "micaa_mf"},
    { name: "HYLTRose", twitch: "gooonzu"},
    { name: "0101010101010101", twitch: "tepashadowleeuss"},
    { name: "The Last Arisen", twitch: "GoldenD3mon"},
    { name: "sanguchazo", twitch: "aangeldcris"},
    { name: "la panchera", twitch: "dorortiva"},
    // Agrega más streamers aquí
];

const Streams = () => {
    const twitchRef = useRef(null);
    const canalTwitch = "agustinitita";

    useEffect(() => {
        // Evitar la doble inicialización
        if (window.Twitch && twitchRef.current && !twitchRef.current.hasChildNodes()) {
            new window.Twitch.Embed("twitch-embed", {
                width: "100%",
                height: "1000",
                channel: canalTwitch,
                layout: "video",
                autoplay: false,
            });

            twitchRef.current.addEventListener("click", () => {
                window.open(`https://www.twitch.tv/${canalTwitch}`, "_blank");
            });
        }
    }, []);
    return (
        <section id="streams" className="contenido">
            <h2>Directo de la anfitriona</h2>

            {/* Contenedor del stream */}
            <div ref={twitchRef} id="twitch-embed" className="stream-box"></div>

            {/* Tabla de streamers */}
            <h3>También puedes ver a...</h3>
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
                            <td><a href={`https://www.twitch.tv/${streamer.twitch}`} target="_blank" rel="noopener noreferrer">{streamer.twitch}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Streams;
