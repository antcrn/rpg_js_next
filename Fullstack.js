class Fullstack extends Character {
    constructor(name, status = "playing", hp = 10, dmg = 4, mana = 100) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
    }

    RmRf = (victim) => {
        if (this.mana >= 10) {
            this.dmg = 5;
            this.mana -= 25;
            this.dealDamage(victim);
            game.message(`${this.name} utilise rm -rf sur ${victim.name}`);
            this.dmg = 2;
        } else {
            this.mana = 0;
            console.log(`${this.name} n'a plus de mana, il lance son attaque normale`);
            this.dealDamage(victim);
        }
    }

    takeDamage = (dmg) => {
        this.hp -= dmg;
    }
}