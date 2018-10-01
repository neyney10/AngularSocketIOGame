var Character = require('./character');
module.exports = class Floor {
    constructor(name, enemies) {
        this.name = name;
        this.enemies = enemies.slice();
    }

    getEnemy(index) {
        return Character.createFromOther(this.enemies[index]);
    }

}