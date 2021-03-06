var Attack = require('./attack');
var Defence = require('./defence');
module.exports =  class Character {

    constructor() {
        this.health = 100; // Current in battle health
        this.healthPoolCap = 100;
        this.damage = {min: 1, max: 5};
        this.defence = {soft: 0, hard: 0};
        this.attacks = [new Attack('Punch',10,2,0), new Attack('Sword Slash',20,6,1), new Attack('Magic orb',25,9,2)];
        this.defences = [new Defence('Evade',100, 35, 8, 0), new Defence('Hand Guard',45, 85, 6, 1), new Defence('Shield', 80, 65, 5, 1)];
        this.level = 1;
        this.mana = 20; // Current in battle mana
        this.manaPoolCap = 20; //max Mana

        // other
        this.experienceWorth = 20;
        this.moneyWorth = 115;
        this.levelUpModifiers = {health: 4, mana: 2, defence: 1, damage: 1};

    }

    static create(health, mana, expWorth, moneyWorth, minDmg, maxDmg, softDef, hardDef, attacks, defences) {
        var c = new Character();

        c.healthPoolCap = health;
        c.health = c.healthPoolCap;
        c.manaPoolCap = mana;
        c.mana = c.manaPoolCap;
        c.experienceWorth = expWorth;
        c.moneyWorth = moneyWorth;
        c.damage = {min: minDmg, max: maxDmg};
        c.defence = {soft: softDef, hard: hardDef};
        c.attacks = attacks;
        c.defences = defences;

        return c;

    }

    static createFromOther(other) {
        return this.create(
            other.health,
            other.mana,
            other.experienceWorth,
            other.moneyWorth,
            other.damage.min,
            other.damage.max,
            other.defence.soft,
            other.defence.hard,
            other.attacks,
            other.defences);
    }

    receiveDamage(other, attackIndex, defenceIndex) {
        console.log('[DEBUG] ' + (attackIndex  == undefined) + " | " + (attackIndex >= other.attacks.length) + " | "+(attackIndex < 0) +" | "+attackIndex);

        if(attackIndex == undefined || attackIndex >= other.attacks.length || attackIndex < 0) {
            this.defend(defenceIndex);
            return true;
        }
        
        var attackdmg = other.attack(attackIndex);
        
        if(attackdmg > 0) {
            var basedmg = Math.floor(attackdmg+other.damage.min+Math.random()*other.damage.max);
            var dmg = Math.floor((basedmg-this.defence.soft)*(1-this.defence.hard/100));
                dmg -= Math.floor(dmg*this.defend(defenceIndex));

            this.health -= (dmg > 0)? dmg : 0;
            if(this.health <= 0) {
                other.gainEXP(this.experienceWorth);
                other.gainMoney(this.moneyWorth);
                return false; //not alive
            }
        }

        return true; //still alive

    }

    attack(attackIndex) {
        if(this.mana >= this.attacks[attackIndex].manaCost) {
            this.mana -= this.attacks[attackIndex].manaCost;
            return this.attacks[attackIndex].baseDamage;
        }
        else 
            return 0;
    }

    defend(defenceIndex) {
        //console.log("inside recievedmg:" +this.mana + " | "+ this.manaPoolCap + " | "+ JSON.stringify(de));

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
        while(this.experience >= this.experienceToLevelUp) //LEVEL UP
            this.levelUp();
    }

    gainMoney(amount) {
        this.money += amount;
    }

    levelUp() {
        //experience
        this.experience -= this.experienceToLevelUp;
        this.experienceToLevelUp *= 1.5;
        this.experienceToLevelUp += 7*this.level+1;

        //level up extras
        this.level += 1;

        this.manaPoolCap += this.levelUpModifiers.mana;
        this.mana = this.manaPoolCap;

        this.healthPoolCap += this.levelUpModifiers.health;
        this.health = this.healthPoolCap;

        this.defence.soft += this.levelUpModifiers.defence;

        this.damage.max += this.levelUpModifiers.damage;

        console.log("[DEBUG] LEVEL UP!");
    }
};
