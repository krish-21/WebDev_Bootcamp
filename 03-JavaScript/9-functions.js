function singSong() {
    console.log("DO");
    console.log("Re");
    console.log("MI");
}

singSong();

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greet("Krishna", "Nanduri");

function repeat(message, count) {
    let result = ""
    for (let i = 0; i < count; i++) {
        result += message;
    }
    console.log(result);
}

repeat("I'm gonna repeat this! ", 3);

function newGreet(first, middle,last) {
    console.log(`Hey there, ${first} ${middle} ${last}.`);
}


function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    const sum = (x + y)
    console.log(sum);
    return sum;
    console.log("After return"); // unreachable code
}