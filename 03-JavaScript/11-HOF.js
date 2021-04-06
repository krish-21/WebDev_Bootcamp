//
//  Function Expressions
//

const add = function (x, y) {
    return x + y;
};

const square = function (num) {
    return num * num;
};


//
//  Higher Order Functions
//

function callTwice(func) {
    func();
    func();
}
function callTenTimes(func) {
    for (let i = 0; i < 10; i++) {
        func();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie);
console.log("\n");
callTenTimes(rollDie);

console.log("\n");

//
//  Returning Functions
//

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("First function");
        }
    } else {
        return function() {
            console.log("Second function");
        }
    }
}

var mysteryFunc = makeMysteryFunc();


console.log("\n");


function makeBetweenFunc(min, max) {
    return function(num) {
        return num > min && num < max;
    }
}

var isChild = makeBetweenFunc(0,18);
var isAdult = makeBetweenFunc(18, 65);
var isSenior = makeBetweenFunc(65, 130);

console.log("isChild(2): ", isChild(2));
console.log("isChild(19): ", isChild(19));
console.log("isAdult(36): ", isAdult(36));
console.log("isSenior(76): ", isSenior(76));