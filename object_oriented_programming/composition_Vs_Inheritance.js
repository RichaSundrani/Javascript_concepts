// Inheritance 

class Monster {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`${this.name} is attacking...`);
    }

    walk() {
        console.log(`${this.name} is walking...`);
    }
}

class FlyingMoster extends Monster {
    fly() {
        console.log(`${this.name} is flying...`);
    }
}

class SwimmingMoster extends Monster {
    swim() {
        console.log(`${this.name} is swimming...`);
    }
}

//  needed all properties from all three classes 
// class FlyingSwimmingMonster extends FlyingMoster/ SwimmingMoster {

// }

// const bear = new Monster("Bear");
// bear.walk();
// bear.attack();

// const eagle = new FlyingMoster("Eagle");
// eagle.walk();
// eagle.attack();
// eagle.fly();

// const shark = new SwimmingMoster("Eagle");
// shark.walk();
// shark.attack();
// shark.swim();

// Composition

function walker({ name }) {
    return {
        walk: () => console.log(`${this.name} is walking...`)
    }
}

function attack({ name }) {
    return {
        attack: () => console.log(`${this.name} is attacking...`)
    }
}

// Testing 
function foo({ obj }) {
    // this.name = name;
    console.log(obj);
    console.log(this.name);

}

foo({ name: "Kausik" });

function swimmer(obj) {
    return {
        swim: () => console.log(`${obj.name} is swimming...`)
    }
}

// var eagle = swimmer({ name: "Eagle" })
// eagle.swim();

function swimmingMosterCreator(name) {
    const moster = { name: name }
    return {
        ...moster,
        ...swimmer(moster)
    }
}

// var newMonster = swimmingMosterCreator("Monster")
// newMonster.swim();

function flyer({ name }) {
    return {
        fly: () => console.log(`${this.name} is flying...`)
    }
}

function flyingSwimmingMonster(name) {
    const monster = { name: name }

    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...walker(monster),
        ...attack(monster)
    }
}

// new instance now have all the properties and methids and it can be mixed and matched 

// var all = flyingSwimmingMonster("Richard");
// all.fly();
// all.walk();
// all.attack();
// all.walk();

