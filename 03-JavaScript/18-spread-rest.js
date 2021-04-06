//
//  Default Params
//

// Old way
function rollDieOld(numSides) {
    // if (numSides === undefined) {
    //     numSides = 6;
    // }
    numSides = typeof numSides !== "undefined" ? numSides : 6;
    
    return Math.floor(Math.random() * numSides) + 1;
}

// New way
function rollDieNew(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// default params won't work in the first param
// function greet(msg = "Hey there!", person) {
//     console.log(`${msg}, ${person}!`);
// }

function greet(person, msg = "Hey there!", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}


//
//  Spread
//

// Spread in Function Calls
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(nums));    // NaN
console.log(Math.max(...nums)); // 10

console.log("\n");

console.log(nums);
console.log(...nums);

console.log("\n");

console.log("Hello!");
console.log(..."Hello!");

console.log("\n");

// Spread in Array Literals
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

const word = "Hello";
const chars= [...word];

// Spread in Object Literal
const feline = { legs: 4, family: "Felidae"};
const canine = { isFurry: true, family: "Caninae"};

const catDog = {...feline, ...canine};
const dogCat = {...canine, ...feline};

const myAnimal = {...feline, ...canine, family: "Nanduri", isCute: true};


// Arrays into Objects
const arrToObj = {...[0, 1, 2]};    // Indices are the keys



//
//  Rest Parameters
//

// arguments            // doesnt work in Arrow Functions
function sum_1() {
    console.log(arguments);
    console.log("typeof arguments: ", typeof arguments);
}

console.log("sum_1");
sum_1();
sum_1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("\n");
console.log("\n");


function sum_2(nums) {
    console.log(arguments);
}

console.log("sum_2");
sum_2(1);
sum_2(1, 2);

console.log("\n");
console.log("\n");


// Rest                             // Works in Arrow Functions
function sumREST_1(...nums) {
    console.log(nums);
    console.log(nums.reduce((sum, num) => sum + num));
}

console.log("sumREST_1");
sumREST_1(1);
sumREST_1(1, 2);

console.log("\n");
console.log("\n");


function sumREST_2(num1, num2, ...nums) {
    console.log(num1);
    console.log(num2);
    console.log(nums);
    try {
        console.log(num1 + num2 + nums.reduce((sum, num) => sum + num));
    } catch {
        console.log("Cannot use Reduce");
    }
}

console.log("sumREST_2");
sumREST_2(1);
console.log("\n");
sumREST_2(1, 2);
console.log("\n");
sumREST_2(1, 2, 3, 4, 5, 6);
console.log("\n");
sumREST_2(1, 2, [3, 4, 5, 6]);
console.log("\n");