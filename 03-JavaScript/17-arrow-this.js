


//
//  Arrow Functions & this
//

const person  = {
    firstName: "Krishna",
    lastName: "Nanduri",

    //
    // 'this' refers to the scope where the function is excecuted
    //
    fullName_F: function() {
        console.log("this: ", this);
        console.log(`${this.firstName} + ${this.lastName}`);
        console.log("\n");
    },
    //
    // 'this' refers to the scope where the function is created
    //
    fullName_A: () => {
        console.log("this: ", this);
        console.log(`${this.firstName} + ${this.lastName}`);
        console.log("\n");
    },

    shoutName_FFF: function() {
        setTimeout(function() {
            console.log("person.shoutName_FFF: ");
            console.log("this: ", this);
            console.log(this.fullName_F());
            console.log("\n");
        }, 0);
    },
    shoutName_FFA: function() {
        setTimeout(function() {
            console.log("person.shoutName_FFA: ");
            console.log("this: ", this);
            console.log(this.fullName_A());
            console.log("\n");
        }, 0);
    },
    shoutName_FAF: function() {        // The only one that works as intended
        setTimeout(() => {
            console.log("person.shoutName_FAF: ");
            console.log("this: ", this);
            console.log(this.fullName_F());
            console.log("\n");
        }, 0);
    },
    shoutName_FAA: function() {
        setTimeout(() => {
            console.log("person.shoutName_FAA: ");
            console.log("this: ", this);
            console.log(this.fullName_A());
            console.log("\n");
        }, 0);
    },

    shoutName_AFF: () => {
        setTimeout(function() {
            console.log("person.shoutName_AFF: ");
            console.log("this: ", this);
            console.log(this.fullName_F());
            console.log("\n");
        }, 0);
    },
    shoutName_AFA: () => {
        setTimeout(function() {
            console.log("person.shoutName_AFA: ");
            console.log("this: ", this);
            console.log(this.fullName_A());
            console.log("\n");
        }, 0);
    },
    shoutName_AAF: () => {
        setTimeout(() => {
            console.log("person.shoutName_AAF: ");
            console.log("this: ", this);
            console.log(this.fullName_F());
            console.log("\n");
        }, 0);
    },
    shoutName_AAA: () => {
        setTimeout(() => {
            console.log("person.shoutName_AAA: ");
            console.log("this: ", this);
            console.log(this.fullName_A());
            console.log("\n");
        }, 0);
    },
}

person.fullName_F();
person.fullName_A();

person.shoutName_FFF();
person.shoutName_FFA();
person.shoutName_FAF();     // The only one that works as intended
person.shoutName_FAA();

person.shoutName_AFF();
person.shoutName_AFA();
person.shoutName_AAF();
person.shoutName_AAA();