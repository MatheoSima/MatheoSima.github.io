const players = [
    { name: "LeBron James", stats: { ppg: 25.4, rpg: 7.9, apg: 7.9 }, videoClip: "lebron_james_clip.mp4" },
    { name: "Stephen Curry", stats: { ppg: 30.2, rpg: 5.5, apg: 6.7 }, videoClip: "stephen_curry_clip.mp4" },
    { name: "Kevin Durant", stats: { ppg: 28.2, rpg: 8.4, apg: 5.2 }, videoClip: "kevin_durant_clip.mp4" },
    { name: "Giannis Antetokounmpo", stats: { ppg: 29.6, rpg: 13.7, apg: 5.8 }, videoClip: "giannis_clip.mp4" },
    { name: "Kawhi Leonard", stats: { ppg: 24.8, rpg: 6.5, apg: 4.6 }, videoClip: "kawhi_leonard_clip.mp4" },
    { name: "James Harden", stats: { ppg: 25.0, rpg: 5.5, apg: 11.0 }, videoClip: "harden_clip.mp4" },
    { name: "Luka Dončić", stats: { ppg: 27.7, rpg: 8.0, apg: 9.0 }, videoClip: "luka_clip.mp4" },
    { name: "Anthony Davis", stats: { ppg: 24.0, rpg: 10.4, apg: 3.3 }, videoClip: "anthony_davis_clip.mp4" },
    { name: "Joel Embiid", stats: { ppg: 28.5, rpg: 10.6, apg: 3.8 }, videoClip: "embiid_clip.mp4" },
    { name: "Kyrie Irving", stats: { ppg: 26.9, rpg: 4.8, apg: 6.0 }, videoClip: "kyrie_clip.mp4" },
    // Puedes agregar más jugadores según sea necesario
];

function showPlayers() {
    document.getElementById("homepage").style.css = "none";
    document.getElementById("playersPage").style.css = "block";
    displayPlayers(players);
}

function showHomePage() {
    document.getElementById("homepage").style.css = "block";
    document.getElementById("playersPage").style.css = "none";
    document.getElementById("playerDetails").style.css = "none";
}

function searchPlayer() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const player = players.find(player => player.name.toLowerCase() === searchInput);
    if (player) {
        displayPlayerDetails(player);
    } else {
        alert("Jugador no encontrado");
    }
}

function searchOnEnter(event) {
    if (event.key === "Enter") {
        searchPlayer();
    }
}

function displayPlayers(playersToShow) {
    const playersList = document.getElementById("playersList");
    playersList.innerHTML = "";

    playersToShow.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.className = "player-card";
        playerCard.innerHTML = `
            <img src="images/${player.name.replace(' ', '_')}.jpg" alt="${player.name}" onclick="displayPlayerDetails(${JSON.stringify(player)})">
            <h2>${player.name}</h2>
        `;
        playersList.appendChild(playerCard);
    });
}

function displayPlayerDetails(player) {
    const playerName = document.getElementById("playerName");
    const playerImage = document.getElementById("playerImage");
    const statsBoard = document.getElementById("statsBoard");
    const videoClips = document.getElementById("videoClips");

    playerName.textContent = player.name;
    playerImage.src = `images/${player.name.replace(' ', '_')}.jpg`;

    statsBoard.innerHTML = `
        <p>PPG: ${player.stats.ppg}</p>
        <p>RPG: ${player.stats.rpg}</p>
        <p>APG: ${player.stats.apg}</p>
    `;

    videoClips.innerHTML = `<video controls><source src="${player.videoClip}" type="video/mp4"></video>`;

    document.getElementById("playerDetails").style.css = "block";
}
