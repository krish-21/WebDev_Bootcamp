// Objects are Key Value Pairs

const person = {firstName: "Krishna", lastName: "Nanduri"};

console.log("person: ", person);

const kitchenSink = {
    favNum: 21,
    isFunny: true,
    colors: ['grey', 'black', ['gold', 'blue']],
};

console.log("\nperson['lastName']: ", person["lastName"]);
console.log("\nperson.lastName: ", person.lastName);
console.log("\nperson['asdasdad']: ", person["asdasdad"]);

// All keys are converted into Strings


let years = {2015: "GOOD", 2020: "BAD"};

// error
// console.log("\nyears.2015: ", years.2015);
console.log("\nyears[2015]: ", years[2015]);

console.log("\nyears['20' + '15']", years["20" + "15"]);

let currentYear = 2020;

console.log("\ncurrentYear: ", currentYear)
console.log("\nyears.currentYear: ", years.currentYear);
console.log("\nyears[currentYear]", years[currentYear]);


const midTerms = {
    abcd: 75,
    efgh: 96,
    ijkl: 63,
};

console.log("\nmidTerms: ", midTerms);

midTerms.ijkl = 64;
console.log("\nAfter Update: midTerms: ", midTerms);

midTerms.mnop = 88;
console.log("\nAfter Addition: midTerms: ", midTerms);

midTerms.qrst = 99;
console.log("\nAfter Addition: midTerms: ", midTerms);

// Arrays can be nested inside with Arrays & Objects
// Objects can be nested inside Arrays & Objects