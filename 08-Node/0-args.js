console.log("Hello from 0-args.js!")

console.log("\n");

// argv will be all the arguments passed in the Terminal
console.log(process.argv);

const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`);
}