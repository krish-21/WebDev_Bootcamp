// F... Arrow functions & this...
// String.prototype.yell = () => console.log(this);

// String.prototype.yell = function () {
//     console.log(this.toUpperCase());
// }

String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()}!!!!! AAAAGGGGHHHHH!!!!`;
}


Array.prototype.pop = function () {
    return "Sorry, I want that element... I will NEVER pop it off!!!"
}


            // this is the actual object
            // the template object, the prototype
console.log(Array.prototype);



console.log("\n");
console.log("\n");


const arr = [1, 2, 3];

            // a property
            // this is a reference to the prototype object
console.log(arr.__proto__);