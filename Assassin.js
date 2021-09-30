class Assassin extends Character {
    constructor(name, status = "playing", hp = 1, dmg = 6, mana = 20, spe = false) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
        this.spe = spe;
    }

    shadowHit = (victim) => {
        if (this.mana >= 1) {
            this.dmg += 1;
            this.mana -= 20;
            this.dealDamage(victim);
            this.spe = true;
            console.log(`${this.name} utilise Shadow Hit sur ${victim.name}`);
        } else {
            this.mana = 0;
            console.log(`${this.name} n'a plus de mana, il lance son attaque normale`);
            this.dealDamage(victim);
        }
    }

    takeDamage = (dmg) => {
        if (!this.spe) {
            this.hp -= dmg;
        } else {
            console.log(`${this.name} a activé son attaque spéciale, il ne subit aucun dégats ce tour.`);
        }
    }
}