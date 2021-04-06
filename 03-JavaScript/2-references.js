let luckyNum = 21;

let luckyNums = [21, 3, 7]

console.log("\n[21, 3, 7] === luckyNums: ", [21, 3, 7] === luckyNums);
console.log("\n[21, 3, 7] == luckyNums: ", [21, 3, 7] == luckyNums);


// new array is not created
// they both point towards the same array
let numsCopy = luckyNums;

luckyNums.push(12);

console.log("\n", numsCopy);

luckyNums.pop();

console.log("\n", numsCopy);

console.log("\nnumsCopy === luckyNum: ", numsCopy === luckyNums);
console.log("\nnumsCopy == luckyNum: ", numsCopy == luckyNums);


// as long as the reference remains the same
const myArr = [0, 1, 2, 3]

// no error
myArr.push(4);

try {
    // not allowed
    myArr = [1, 2, 3];
} catch (err) {
    console.log("\n", err);
}
