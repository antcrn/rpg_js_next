class Paladin extends Character {
    constructor(name, status = "playing", hp = 16, dmg = 3, mana = 160) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
    }

    healingLighting = (victim) => {
        if (this.mana >= 1) {
            this.dmg += 1;
            this.mana -= 40;
            this.hp += 5;
            this.dealDamage(victim);
            console.log(`${this.name} utilise Healing Lighting sur ${victim.name} et récupère 5 hp`);
            this.dmg = 3;
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