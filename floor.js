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
    
    randomEnemy(level) {
        return Character.create(30+(level*12), 10+(level*2), 20+(level*10), 30+(level*13), 1+(level*1), 5+(level*2), 0+(level*3), 10, [attacks[0]], [defences[2]]);
    }

}