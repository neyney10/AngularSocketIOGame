var Attack = require('./attacks');
module.exports =  class Character {

    constructor() {
        this.health = 100;
        this.damage = {min: 1, max: 5};
        this.defence = {soft: 0, hard: 0};
        this.attacks = [new Attack('Punch',10,2), new Attack('Sword Slash',20,6), new Attack('Magic orb',25,9)];
        this.money = 0;
        this.level = 1;
        this.experience = 0;
        this.experienceToLevelUp = 30;
        this.mana = 20; // Current in battle mana
        this.manaPoolCap = 20; //max Mana
        //other
        this.experienceWorth = 20;

    }

    receiveDamage(other, attackIndex) {
        var basedmg = Math.floor(other.attacks[attackIndex].baseDamage+other.damage.min+Math.random()*other.damage.max);
        var dmg = Math.floor((basedmg-this.defence.soft)*(1-this.defence.hard/100));
        
        this.health -= dmg;
        if(this.health <= 0) {
            other.gainEXP(this.experienceWorth);
            return false; //not alive
        }
        return true; //still alive
    }

    attack(attackIndex) {
        if(attackIndex >= this.attacks.length)
            attackIndex = 0;

        if(this.mana >= this.attacks[attackIndex].manaCost) {
            this.mana -= this.attacks[attackIndex].manaCost;
            return this.attacks[attackIndex].baseDamage;
        }
        else 
            return 0;
    }

    gainEXP(amount) {
        this.experience += amount;
        if(this.experience >= this.experienceToLevelUp) //LEVEL UP
            this.levelUp();
    }

    levelUp() {
        this.experienceToLevelUp *= 1.5;
        this.experienceToLevelUp += 7*this.level+1;
        this.level += 1;
        this.experience -= this.experienceToLevelUp;
    }
};
