//
// ARRAYS
//

let empty = [];

let colors = ["red", "yellow", "green"];

let days = ["Monday", "Tuesday", "Wednesday"];

let kitchenSink = [true, undefined, 12, 9.999999, NaN, false, null, "s", "Hi!!!!"];

colors[10] = "indigo";
// ["red", "yellow", "green", empty × 7, "indigo"]
// input: colors[5]; output: undefined


let cats = ["Milky", "Ratchet"];
let dogs = ["Shadow", "Rose"];

// cats is not touched, new array is returned
let pets = cats.concat(dogs)

// true
console.log("\n", pets.includes("Rose"))

// 0
console.log("\n", cats.indexOf("Milky"))

// ["Ratchet", "Milky"]
// destructive property
// reverses the original array
console.log("\n", cats.reverse())


// Slicing

let numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// copy of the same array
console.log("\nsilce(): ", numbers.slice());

// from index of 3, till the end
console.log("\nslice(3): ", numbers.slice(3));

// from 3 to 5
console.log("\nslice(3, 6): ", numbers.slice(3, 6));

// last 3
console.log("\nslice(-3): ", numbers.slice(-3));


// Splicing

colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// destructive method
// returns the deleted items
console.log("\nsplice(5): ", colors.splice(5, 1));
console.log("\ncolors: ", colors);

console.log("\ncolors.splice(1, 0, 'red-orange'): ", colors.splice(1, 0, "red-orange"));
console.log("\ncolors: ", colors);

console.log("\ncolors.splice(4, 0, 'yelow-green', 'forest-green'): ", colors.splice(4, 0, "yellow-green", "forest-green"));
console.log("\ncolors: ", colors);

console.log("\nsplice(2, 2, 'DELETED!!!'): ", colors.splice(2, 2, "DELETED!!!"));
console.log("\ncolors: ", colors);


// Sorting

let scores= [1, 70, 100, 2500, 9, -12, 0 , 34];

console.log("\nscores.sort(): ", scores.sort());
console.log("\nscores: ", scores);
