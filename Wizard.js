class Wizard extends Character {
    constructor(name, status = "playing", hp = 10, dmg = 2, mana = 200) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
    }

    Fireball = (victim) => {
        if (this.mana >= 1) {
            this.dmg = 7;
            this.mana -= 25;
            this.dealDamage(victim);
            game.message(`${this.name} utilise fire ball sur ${victim.name}`);
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