class Monk extends Character {
    constructor(name, status = "playing", hp = 8, dmg = 2, mana = 200) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
    }

    heal = (victim) => {
        if (this.mana >= 1) {
            this.hp += 8;
            this.mana -= 25;
            console.log(`${this.name} utilise heal, il gagne 8 hp,${this.hp}`);
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