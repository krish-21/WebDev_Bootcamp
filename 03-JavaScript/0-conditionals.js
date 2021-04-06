//
// CONSOLE BASICS
//

console.log("Hello from our JS File!");
console.log("----------------------------------------------------------\n\n");


// Accessible in our console
let total = 1 + 3;


if (1 + 2 === 2) {
    console.log("Math Still Works!");
}

//
// CONDITONALS
//

let random = Math.random();

if (random < 0.5) {
    console.log("\nYour number is less than 0.5");
} else {
    console.log("\nYour number is greater than or equal to 0.5");
}
console.log(random);

const dayOfWeek = "Friday";
// const dayOfWeek = prompt("Enter a day").toLowerCase();

if (dayOfWeek === "monday") {
    console.log("\nUghh... I hate Mondays!");
} 
else if (dayOfWeek === "aaturday"){
    console.log("\nYay! I love Saturdays!");
} 
else if (dayOfWeek === "friday") {
    console.log("\nFridays are decent but great after work!")
} else {
    console.log("\nMeh...");
}


// const password = prompt("Please enter a Password");
let password = "asdasdasd";

if (password.length >= 6) {
    // console.log("\nLong enough");
    if (password.indexOf(" ") === -1) {
        console.log("\nValid Password!");
    } else {
        console.log("\nPassword cannot contain spaces!");
    }
} else {
    console.log("\nPassword too short! Must be 6+ characters.");
}


// const userInput = prompt("Enter something");
const userInput = "hello";

if (userInput) {
    console.log("\nTruthy");
} else {
    console.log("\nFalsy");
    // false
    // 0
    // "" (empty string)
    // null
    // undefined
    // NaN
}


//
// LOGICAL OPERATORS
//

// password = prompt("Please enter a Password");
password = "abcdefgh";

// Logical AND
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("\nValid Password!");
} else {
    console.log("\nIncorrect format!");
}


let age = -65;

// Logican OR
if (age >= 0 && age < 5 || age >= 65) {
    console.log("\nFree");
} else if (age >= 5 && age < 10) {
    console.log("\n$10");
} else if (age >=10 && age < 65) {
    console.log("\n$20");
} else {
    console.log("\nInvalid age!");
}

// let firstName = prompt("Enter your First Name");
let firstName = "bleh bleh bleh";

// Logical NOT
if (!firstName) {
    firstName = prompt("Try again!");
}

age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("\nYou are neither a baby nor a senior!");
}


console.log("\n\n----------------------------------------------------------");
console.log("Goodbye!");



//
// Switch Statements
//

// const day = 2;

// if (day === 1) {
//     console.log("Monday!");
// } else if (day === 2) {
//     console.log("Tuesday!");
// } else if (day === 3) {
//     console.log("Wednesday!");
// } else if (day === 4) {
//     console.log("Thursday!");
// } else if (day === 5) {
//     console.log("Friday!");
// } else if (day === 6) {
//     console.log("Saturday!");
// } else if (day === 7) {
//     console.log("Sunday!");
// } else {
//     console.log("I don't know that!")
// }

const day = 2;

// whenever there is a match
// it keeps going till it hits a break
switch (day) {
    case 1:
        console.log("Monday!");
        break;
    case 2:
        console.log("Tuesday!");
        break;
    case 3:
        console.log("Wednesday!");
        break;
    case 4:
        console.log("Thursday!");
        break;
    case 5:
        console.log("Friday!");
        break;
    // case 6:
    //     console.log("Saturday!");
    //     break;
    // case 7:
    //     console.log("Sunday!");
    //     break;
    case 6:
    case 7:
        console.log("Weekend!");
        break;
    default:
        console.log("I don't know that!");
        break;
}