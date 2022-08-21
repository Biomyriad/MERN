class Ninja {
    constructor (name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats () {
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake () {
        this.health = this.health + 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
