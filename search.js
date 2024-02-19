document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("player-search-form");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchTerm = document.getElementById("player-search").value.toLowerCase();
        filterPlayers(searchTerm);
    });

    function filterPlayers(searchTerm) {
        const rows = document.querySelectorAll("#players-section tbody tr");

        rows.forEach((row) => {
            const playerName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
            if (playerName.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }
});
