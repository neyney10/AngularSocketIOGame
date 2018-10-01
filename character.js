var Attack = require('./attack');
var Defence = require('./defence');
module.exports =  class Character {

    constructor() {
        this.health = 100;
        this.damage = {min: 1, max: 5};
        this.defence = {soft: 0, hard: 0};
        this.attacks = [new Attack('Punch',10,2), new Attack('Sword Slash',20,6), new Attack('Magic orb',25,9)];
        this.defences = [new Defence('Evade',100, 35, 8), new Defence('Hand Guard',45, 85, 6), new Defence('Shield', 80, 65, 5)];
        this.level = 1;
        this.mana = 20; // Current in battle mana
        this.manaPoolCap = 20; //max Mana
        //other
        this.experienceWorth = 20;

    }

    receiveDamage(other, attackIndex, defenceIndex) {
        var attackdmg = other.attack(attackIndex);
        //console.log('[DEBUG] ' + attackIndex + " | " + defenceIndex + " | "+attackdmg);

        if(attackdmg > 0) {
            var basedmg = Math.floor(attackdmg+other.damage.min+Math.random()*other.damage.max);
            var dmg = Math.floor((basedmg-this.defence.soft)*(1-this.defence.hard/100));
            console.log('[--DEBUG dmg] '+dmg);
                dmg -= Math.floor(dmg*this.defend(defenceIndex));
                console.log('[--DEBUG dmg after def] '+dmg);
            this.health -= dmg;
            if(this.health <= 0) {
                other.gainEXP(this.experienceWorth);
                return false; //not alive
            }
        }

        return true; //still alive

    }

    attack(attackIndex) {
        console.log('[DEBUG] ' + (attackIndex  == undefined) + " | " + (attackIndex >= this.attacks.length) + " | "+(attackIndex < 0));

        if(attackIndex == undefined || attackIndex >= this.attacks.length || attackIndex < 0)
            return 0;
        
        if(this.mana >= this.attacks[attackIndex].manaCost) {
            this.mana -= this.attacks[attackIndex].manaCost;
            return this.attacks[attackIndex].baseDamage;
        }
        else 
            return 0;
    }

    defend(defenceIndex) {
        if(defenceIndex == undefined || defenceIndex < 0 || defenceIndex >= this.defences.length)
            return 0;
        
        var de = this.defences[defenceIndex];

        this.mana += de.manaGain;
        if(this.mana > this.manaPoolCap)
            this.mana = this.manaPoolCap;

        var defendSuccess = (Math.random()*100 <= de.chance)? true : false;
        if(!defendSuccess)
            return 0;

        return de.baseDefence/100;
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
        console.log("[DEBUG] LEVEL UP!");
        
    }
};
