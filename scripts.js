// Cambiar de sección
function mostrarSeccion(seccion) {
    document.querySelectorAll('.contenido').forEach(sec => sec.classList.remove('activo'));
    document.getElementById(seccion).classList.add('activo');
}

// API Riot Games
const API_KEY = "RGAPI-570008be-9331-4111-9394-91eff3173b7e";
const REGION = "LA2";
const SUMMONERS = ["NoisyDark#LAS", "El69DeAlaska#LAS"];

async function obtenerClasificacion() {
    const tbody = document.querySelector("#tabla-clasificacion tbody");
    tbody.innerHTML = ""; // Limpiar la tabla

    let jugadores = [];

    for (let nombre of SUMMONERS) {
        try {
            // Obtener el ID del jugador
            let res1 = await fetch(`https://${REGION}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nombre}?api_key=${API_KEY}`);
            let summoner = await res1.json();
            
            // Obtener el ranking del jugador
            let res2 = await fetch(`https://${REGION}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner.id}?api_key=${API_KEY}`);
            let rankings = await res2.json();
            
            let soloQ = rankings.find(queue => queue.queueType === "RANKED_SOLO_5x5");
            if (soloQ) {
                jugadores.push({
                    nombre: nombre,
                    elo: `${soloQ.tier} ${soloQ.rank}`,
                    lp: soloQ.leaguePoints
                });
            }
        } catch (error) {
            console.error(`Error obteniendo datos de ${nombre}:`, error);
        }
    }

    // Ordenar por LP de mayor a menor
    jugadores.sort((a, b) => b.lp - a.lp);

    // Agregar jugadores a la tabla
    jugadores.forEach((jugador, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td>${jugador.elo}</td>
            <td>${jugador.lp} LP</td>
        `;
        tbody.appendChild(fila);
    });
}

// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", obtenerClasificacion);
