//
//  Methods
//

const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num * num * num;
    },
};

const newMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num * num * num;
    }
};


//
//  'this' keyword
//

const cat = {
    name: "Ratchet",
    color: "Grey",
    breed: "Street",
    meow() {
        console.log("This is:", this);
        console.log(`${this.name} says MEOUWWW`);
    },
};

const meow2 = cat.meow;

cat.meow();
console.log("\n");
meow2();

