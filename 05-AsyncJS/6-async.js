// async functions always return promises
// if it returns a value, the promise will be resolved with that value
// if the function throws an exception, the promise will be rejected

// simply declaring as async wil make a function return a promise
async function hello() {
    return "hello";
}

// also valid for arrow functions
const sing = async () => {
    const rand = Math.random()
    if (rand < 0.5) return "LA LA LA LA!";
    // else throw new Error("Uh Oh!");
    else throw "Oh Oh!";
}


sing()
.then(data => {
    console.log("Promise resolved with: ", data);
    console.log("\n");
})
.catch(err => {
    console.log("Promise rejected with: ", err);
    console.log("\n");
});




const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password === "blehblehbleh") return "Welcome!"
    throw "Invalid Password";
}

// login("blah")
// login("blah", "asdfdasdasd")
login("blah", "blehblehbleh")
.then(msg => {
    console.log("LOGGED IN!");
    console.log(msg);
    console.log("\n");
})
.catch(err => {
    console.log("ERROR!");
    console.log(err);
    console.log("\n");
});