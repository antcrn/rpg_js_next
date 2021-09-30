class Fighter extends Character {
    constructor(name, status = "playing", hp = 12, dmg = 4, mana = 40, spe = false) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
        this.spe = spe;
    }

    darkVision = (victim) => {
        if (this.mana >= 1) {
            this.mana -= 20;
            this.dmg += 1;
            this.spe = true;
            game.message(`${this.name} utilise Dark vision sur ${victim.name}`);
            this.dealDamage(victim);
            this.dmg = 4;
        } else {
            this.dealDamage(victim);
        }
    }
    takeDamage = (dmg) => {
        if (!this.spe) {
            this.hp -= dmg;
        } else {
            this.hp -= dmg - 2;
            game.message(`${this.name} a activé son attaque spéciale, il subit -2 dégats ce tour.`);
        }
    }



}