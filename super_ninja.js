class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hello I am ${this.name} Ninja!`);
    }
    showStats() {
        console.log("********|Ninja Stats|************");
        console.log(`Name:     ${this.name}`);
        console.log(`Health:   ${this.health}`);
        console.log(`Speed:    ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name}'s health is now ${this.health}!`);
    }
    speakWisdom() {
        this.drinkSake();
        console.log(`"What one programmer can do in one month, two programmers can do in two months."`);
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    showStats(){
        super.showStats();
        console.log(`Wisdom:   ${this.wisdom}`);
    }
}

const Dylan = new Sensei("Dylan");
const James = new Ninja("James", 100);
const John = new Ninja("John", 100);
const Ralph = new Ninja("Ralph", 100);

// James.sayName();
// James.showStats();
// James.drinkSake();
Dylan.showStats();
Dylan.speakWisdom();
Dylan.showStats();