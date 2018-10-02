module.exports = class Attack {
    constructor(name, baseDamage, manaCost, id) {
        this.name = name;
        this.baseDamage = baseDamage;
        this.manaCost = manaCost;
        this.id = id;
    }
}