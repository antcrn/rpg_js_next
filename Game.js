class Game {
    constructor() {
        this.turnLeft = 10;
        this.playersList = [];
        this.playersLeft = 0;
    }

    playable = () => {
        const playableName = prompt("Please enter your name or cancel for auto mode");
        if (playableName != null) {
            const playableRace = prompt("Hello " + playableName + " !  Choose your race : Fullstack, Wizard, Fighter, Assassin, Berzerker, Paladin, Monk");
            if (playableRace != null) {
                this.chooseRace(playableName, playableRace);
            }
        }
    }

    chooseRace(playableName, playableRace) {
        let p8 = "";
        switch (playableRace) {
            case "Fullstack":
                p8 = new Fullstack(playableName);
                break;
            case "Wizard":
                p8 = new Wizard(playableName);
                break;
            case "Fighter":
                p8 = new Fighter(playableName);
                break;
            case "Assassin":
                p8 = new Assassin(playableName);
                break;
            case "Berzerker":
                p8 = new Berzerker(playableName);
                break;
            case "Paladin":
                p8 = new Paladin(playableName);
                break;
            case "Monk":
                p8 = new Monk(playableName);
                break;
            default:
                this.playable();
                break;

        }
        p8.playable = true;
        this.addPlayer(p8);

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
        if (randomPickPlayer.status == "playing" && randomPickPlayer.name != player.name && player.playable == false) {
            player.dealDamage(randomPickPlayer);
        } else if (this.playersLeft != 7 && player.playable == false) {
            this.randomPlayer(player);
        } else if (player.playable === true) {
            let listName = '';
            for (const el of this.playersList) {
                if (!el.playable && el.status == "playing")
                    listName += `${el.name}, `;
            }
            let playableVictim = prompt(`Please enter the name of ennemi :${listName}`);
            let victimHumanName = this.playersList.findIndex(x => x.name == playableVictim);
            player.dealDamage(this.playersList[victimHumanName]);
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
                player.status == "winner";
                winner = player;
            }
        });
        if (count == 1) {
            this.message(`${winner.name} a gagné, Bravo  :) \n`);
            this.message(`${this.watchStats('playing')}`);
            console.table(this.playersList);
            this.message(`<h2>FIN</h2>`);
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
//const p8 = new Wizard("Zinzin");
//p8.playable = true;
const game = new Game();
game.playable();

game.addPlayer(p1);
game.addPlayer(p2);
game.addPlayer(p3);
game.addPlayer(p4);
game.addPlayer(p5);
game.addPlayer(p6);
game.addPlayer(p7);
//game.addPlayer(p8);
game.newTurn();