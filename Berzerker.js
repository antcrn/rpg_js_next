class Berzerker extends Character {
    constructor(name, status = "playing", hp = 8, dmg = 4, mana = 0) {
        super(hp, dmg, mana);
        this.name = name;
        this.status = status;
    }

    rage = (victim) => {
        this.dmg += 1;
        this.hp -= 1;
        this.dealDamage(victim);
        console.log(`${this.name} utilise Rage sur ${victim.name}`);
    }
    takeDamage = (dmg) => {
        this.hp -= dmg;
    }

}