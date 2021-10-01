class Character {
    constructor(hp, dmg, mana, playable) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.playable = false;
    }
    dealDamage = (victim) => {
        victim.takeDamage(this.dmg);
        game.message(`<span><strong>${this.name}</strong> attaque ${victim.name} avec une attaque de ${this.dmg} de dégats</span>`);
        victim.alive(victim);
        if (victim.status == 'loser') {
            game.message(`<span class="colorBlue"><strong>${this.name}</strong> gagne + 20 de mana 💎</span>`);
            this.mana += 20;
        }
    }
    alive = (victim) => {
        if (this.hp <= 0) {
            this.hp = 0;
            this.status = "loser";
            game.message(`<span class="colorRed"><strong>${this.name}</strong> est mort </span>`);
            game.playersLeft += 1;
        } else {
            return game.message(`<span class="colorBlue"><strong>${this.name}</strong> vit encore avec ${this.hp} hp</span>`);
        }
    }
}