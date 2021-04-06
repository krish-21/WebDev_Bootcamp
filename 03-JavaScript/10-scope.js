//
//  Function Scope
//

let totalEggs = 0;

function collectEggs_1() {
    // scoped to the function
    totalEggs = 6;
    console.log(totalEggs);
}

console.log(totalEggs);
collectEggs_1();
console.log(totalEggs);

console.log("\n");

function collectEggs_1() {
    // scoped to the function
    let totalEggs = 6;
    console.log(totalEggs);
}

console.log(totalEggs);
collectEggs_1();
console.log(totalEggs);

console.log("\n");

const bird = "Scarlet Macaw";
function birdWatch() {
    // console.log(bird);   // Reference Error
    const bird = "Great Blue Heron"
    console.log(bird);
}

birdWatch();

console.log(bird);

console.log("\n");

//
//  Block Scope
//

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = "hi";
}

console.log(radius);
// console.log(PI);     // Reference Error
// console.log(msg);    // Reference Error

console.log("\n");

for (let i = 0; i < 5; i++) {
    let msg = "ASDFGHJKL";
    console.log(msg);
}

// console.log(msg);    // Reference Error  // "var" wouldn't be a problem

console.log("\n");


//
//  Lexical Scope
//

function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            };
        };
        inner();
    };
    cryForHelp();
};
