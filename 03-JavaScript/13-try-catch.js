// hello.toUpperCase()

try {
    hello.toUpperCase()
} catch {
    console.log("ERROR")
}

console.log("After");

console.log("\n");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (err) {
        console.log(err);
        console.log("Please pass a String!");
    }
}

yell("hello");
yell(123);