class Game {
    constructor() {
        this.turnLeft = 10;
        this.playersList = [];
        this.playersLeft = 0;
    }

    addPlayer(player) {
        this.playersList.push(player);
        this.message(`<span>${player.name} entre dans l'arène</span>`);
    }

    newTurn() {
        const currentTurn = new Turn();
        if (this.turnLeft > 0 && this.playersList !== null) {
            currentTurn.startTurn();
            this.turnLeft--;
            this.checkIsWin();
        } else {
            this.playersList.map((player) => {
                if (player.status == "playing") {
                    player.status = "winner";
                }
            });
            this.message(`le jeu est finit ...`);
        }
    }

    watchStats(stat) {
        this.playersList.map((player) => {
            if (player.status == stat) {
                this.message(`<span>${player.name}: ${player.hp}❤️‍🩹 , ${player.dmg}🥊 , ${player.mana}💎 </span>`);
            }
        });
        this.message(`<br/>`);
    }

    randomPlayer = (player) => {
        let randomPickPlayer = this.playersList[Math.floor(Math.random() * this.playersList.length)];
        if (randomPickPlayer.status == "playing" && randomPickPlayer.name != player.name) {
            player.dealDamage(randomPickPlayer);
        } else if (this.playersLeft != 6) {
            this.randomPlayer(player);
        } else {
            this.playersList.map((player) => {
                if (player.status == "playing") {
                    player.status = "winner";
                }
            });
        }
    }

    checkIsAlive = () => {
        this.playersList.map((player) => {
            if (player.status == "playing") {
                this.playersList.push(player);
            }
        });
    }

    checkIsWin = () => {
        let count = 0;
        let winner = [];
        this.playersList.map((player) => {
            if (player.status == "playing") {
                count += 1;
                winner = player;
            }
        });
        if (count == 1) {
            this.message(`<h1>FIN</h1>`);
            this.message(`${winner.name} a gagné :)`);
            this.button('New Game', 'game.newGame');
        } else {
            this.button('Next turn', 'game.newTurn');
            this.buttonOption('reset', 'game.newGame');
        }

    }

    message = (content) => {
        document.getElementById("text").innerHTML += content + '<br/>';
    }

    button = (content, functionGame) => {
        document.getElementById("funct").innerHTML = `<button onclick="${functionGame}()">${content}</button>`;
    }

    buttonOption = (content, functionGame) => {
        document.getElementById("option").innerHTML = `<button onclick="${functionGame}()">${content}</button>`;
    }

    newGame = () => {
        location.reload();
    }
}


const p1 = new Fighter("Grace");
const p2 = new Paladin("Ulder");
const p3 = new Monk("Moana");
const p4 = new Berzerker("Draven");
const p5 = new Assassin("Carl");
const p6 = new Wizard("Gibus");
const p7 = new Fullstack("Tim");

const game = new Game();

game.addPlayer(p1);
game.addPlayer(p2);
game.addPlayer(p3);
game.addPlayer(p4);
game.addPlayer(p5);
game.addPlayer(p6);
game.addPlayer(p7);
game.newTurn();