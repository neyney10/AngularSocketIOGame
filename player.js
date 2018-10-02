var Character = require('./Character');
module.exports = class Player extends Character {
    
    constructor(char) {
        //basic
        super();
        this.experience = 0;
        this.experienceToLevelUp = 30;
        this.money = 0;
        this.floor = 1;

        //per char
        if(char == "merlin")
            this.levelUpModifiers = {health: 4, mana: 2, defence: 1, damage: 1};
        else if(char == "lancelot")
            this.levelUpModifiers = {health: 7, mana: 1, defence: 2, damage: 1};

        //statistics
        this.enemiesKilled = 0;
    }


    
}