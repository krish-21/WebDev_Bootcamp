class Pet {
    constructor(name, age) {
        console.log("In Pet constructor");
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("In Cat constructor");
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOWW!"
    }
}

class Dog  extends Pet {
    bark() {
        return "WOOF!"
    }
    eat() {
        return `${this.name} eats food`;
    }
}

const shadow = new Dog("Shadow", 6);
const ratchet = new Cat("Ratchet", 2);

console.log(shadow);
console.log(ratchet);
