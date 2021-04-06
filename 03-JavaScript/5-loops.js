
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("\n");

let animals = ["Panther", "Tiger", "Lion", "Cat"];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log("\n");

let array_2d = [
    ["abc", "def", "ghi"],
    ["jkl", "mno", "pqr"],
    ["stu", "vwx", "yzA"],
];

for (let i = 0; i < array_2d.length; i++) {
    console.log(`Row: ${i + 1}`);
    for (let j = 0; j < array_2d[i].length; j++) {
        console.log("  ", array_2d[i][j]);
    }
};

console.log("\n");

// while loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
};


console.log("\n");

const SECRET = "asd";

let guess = prompt("Enter the secret code...");
while(guess !== SECRET) {
    guess = prompt("Enter the secret code...");
}

console.log("Congrats! You got the secret code!");

console.log("\n");

let input = prompt("Hey, say something!");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "asd") {
        break;
    }
}
console.log("Ok... You win...");