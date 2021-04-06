const add = function(x, y) {
    return x + y;
};

const arrowAdd = (x,y) => {
    return x + y;
};

// const square = (num) => {
//     return num * num;
// }

const square = num => {
    return num * num;
}

// const rollDie = () => {
//     return Math.floor(Math.random * 6) + 1;
// }

const rollDie = () => (
    // let msg = "asdasdas" // not allowed, only a single statement
    Math.floor(Math.random() * 6) + 1
);

// const shorterAdd = (a, b) => (
//     a + b
// );

const shorterAdd = (a, b) => a + b;


//
//  setTImeout 
//

console.log("HELLO...");
setTimeout(() => {
    console.log("... are you still there?");
}, 2000);
console.log("GOODBYE...");

console.log("\n");

//
//  setInterval
//

const interval1 = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(interval1);
