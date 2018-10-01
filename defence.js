module.exports = class Defence {
    constructor(name, baseDefence, chance, manaGain) {
        this.name = name;
        this.baseDefence = baseDefence;
        this.chance = chance;
        this.manaGain = manaGain;
    }
}