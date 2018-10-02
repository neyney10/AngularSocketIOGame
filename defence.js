module.exports = class Defence {
    constructor(name, baseDefence, chance, manaGain, id) {
        this.name = name;
        this.baseDefence = baseDefence;
        this.chance = chance;
        this.manaGain = manaGain;
        this.id = id;
    }
}