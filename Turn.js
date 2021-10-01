class Turn {
    constructor() {
        this.cantPlay = [];
        this.listPlayerAlive = 0;
    }

    startTurn = () => {
        game.message(`<h2>It's turn ${game.turnLeft}</h2>`);
        if (game.playersleft != 7) {
            this.runTurn();
            game.message("<h3>End of turn</h3>");
            console.table(game.playersList);
        }
    }


    runTurn = () => {
        game.watchStats("playing");
        const listAlives = (players) => {
            if (players.status === "playing") {
                game.randomPlayer(players);
            }
        }
        setInterval(function() {}, 3000);
        game.playersList.some(listAlives);
    }

    isAlive() {
        game.playersList.map((victim) => {
            if (victim.status == "loser") {
                game.message(`<span class="colorRed">${victim.name}: est mort</span>`);
            }
        });
    }

}