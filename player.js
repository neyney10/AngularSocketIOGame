var Character = require('./Character');
var Item = require('./Item');
module.exports = class Player extends Character {
    
    constructor(char) {
        //basic
        super();
        this.experience = 0;
        this.experienceToLevelUp = 30;
        this.money = 0;
        this.floor = 1;
        this.items = [new Item('T-Shirt', 'bodyArmor', {soft: 1, hard: 0}, 0, ''),
                    new Item('Hat', 'headGear', {soft: 1, hard: 0}, 1, ''),
                    new Item('Wood Stick', 'weapon', {min: 0, max: 2}, 2, '')
                    ];
        
        //Equipped
        this.equipment = {weapon: undefined,
                        headGear: undefined,
                        bodyArmor: undefined,
                        shield: undefined}

        //per char
        if(char == "merlin")
            this.levelUpModifiers = {health: 4, mana: 2, defence: 1, damage: 1};
        else if(char == "lancelot")
            this.levelUpModifiers = {health: 7, mana: 1, defence: 2, damage: 1};

        //statistics
        this.enemiesKilled = 0;
    }

    removeItem(id) {
        if(!id)
            return undefined;

        var found = this.items.find(function(item) {
            return (item.id == id);
          });

        if(!found)
            return undefined;
       
        var index =  this.items.indexOf(found);

        return this.items.splice(index,1)[0];
        
    }

    equip(e) {

        this.unequip(e.equipfor); //if there is any equipment on place already then remove it/replace

        if(e.equipfor == 'weapon')
        {
            this.damage.min += e.properties.min;
            this.damage.max += e.properties.max;
            this.equipment.weapon = e;
        }
        else {
            this.defence.soft += e.properties.soft;
            this.defence.hard += e.properties.hard;
                
            this.equipment[e.equipfor] = e;
        }
    }

    unequip(e) {
        if(e.equipfor == 'weapon')//if holding a weapon already
        {
            this.damage.min -= this.equipment['weapon'].properties.min;
            this.damage.max -= this.equipment['weapon'].properties.max;

            //return item to inventory
            this.items.push(this.equipment[e.equipfor]);  
        } else
        if(this.equipment[e.equipfor]) { 
            this.defence.soft -= this.equipment[e.equipfor].properties.soft;
            this.defence.hard -= this.equipment[e.equipfor].properties.hard;

            //return item to inventory
            this.items.push(this.equipment[e.equipfor]);
        }

        this.equipment[e.equipfor] = undefined;
    }

    
}