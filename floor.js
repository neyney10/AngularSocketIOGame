var Character = require('./character');

module.exports = class Floor {
    constructor(name, id, enemies) {
        this.name = name;
        this.enemies = enemies.slice();
        this.id = id;
    }

    getEnemy(index) {
        return Character.createFromOther(this.enemies[index]);
    }

}