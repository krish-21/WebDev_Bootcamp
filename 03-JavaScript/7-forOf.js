const array_1 = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"];

// normal for
for (let i = 0; i < array_1.length; i++) {
    console.log(array_1[i]);
}

console.log("\n\n");

// for...of
for (let chars of array_1) {
    console.log(chars);
}

console.log("\n\n");

let array_2d = [
    ["abc", "def", "ghi"],
    ["jkl", "mno", "pqr"],
    ["stu", "vwx", "yzA"],
];

for (let row of array_2d) {
    for (let student of row) {
        console.log(student)
    }
}

console.log("\n\n");

for (let char of "hello world") {
    console.log(char);
}

console.log("\n\n");

// Object Literals are not iterable
// cannot use for...of
// have to use for...in

const testScores = {
    abc: 123,
    def: 456,
    ghi: 789,
};

for (let chars in testScores) {
    console.log(chars, ":")
    console.log(`Key ${chars} has value ${testScores[chars]} `);
}

// Array of all keys
console.log(Object.keys(testScores));

// Array of all values
console.log(Object.values(testScores));

// Array of arrays [key, value]
console.log(Object.entries(testScores));