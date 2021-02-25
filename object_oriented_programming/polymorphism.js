class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`Generic animal sound!`)
    }
}
let a1 = new Animal("Dog");

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        super.makeSound();
        console.log(`Woof Woof ...`)
    }
};

let a2 = new Dog("Oreo");
let a3 = new Dog("Tubby");
a2.makeSound();
a3.makeSound();


