class Turn {
    constructor() {
        this.cantPlay = [];
        this.listPlayerAlive = 0;
    }

    /*
        Une classe Turn sera dédiée à un tour de jeu, et fera tout ce qui concerne le tour de jeu :
         les attaques, etc. Turn.new déclarera un nouveau tour.

    C'est à toi de réfléchir comment tu vas conceptualiser ta classe, 
    essaie de réfléchir de quoi tu peux avoir besoin tout en gardant en tête que le but est d'interagir avec une page HTML.

    Une méthode startTurn est activée, loggant ainsi It's turn X, X étant le numéro du tour actuel.
    Les personnages sont appelés chacun leur tour, dans un ordre aléatoire. 
    Ils seront appelés par la console qui loggera automatiquement It's time for Y to play.
    Ils peuvent utiliser leur méthode qui leur est propre ou utiliser dealDamage sur l'ennemi de leur choix. 
    Ensuite, il sera loggé X is attacking Y. He deals him Z damages. Y got A lifepoints left.
    Une fois que tous les joueurs ont joué, on log l'ensemble des personnages encore en vie et on utilise newTurn.
    */

    startTurn = () => {
        game.message(`<h2>It's turn ${game.turnLeft}</h2>`);
        if (game.playersleft != 5) {
            this.runTurn();
            game.message("<h3>End of turn</h3>");
        }
    }

    runTurn = () => {
        game.watchStats("playing");
        console.table(game.playersList);
        (game.playersList).forEach(players => {
            if (players.status == "playing") {
                console.table(game.playersList);
                game.randomPlayer(players);
            }
        })
    }

    isAlive() {
        game.playersList.map((victim) => {
            if (victim.status == "loser") {
                game.message(`<span class="colorRed">${victim.name}: est mort</span>`);
            }
        });
    }
}