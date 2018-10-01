var Character = require('./Character');
module.exports = class Player extends Character {
    
    constructor() {
        super();
        this.experience = 0;
        this.experienceToLevelUp = 30;
        this.money = 0;
        this.floor = 1;

        //statistics
        this.enemiesKilled = 0;
    }
    
}