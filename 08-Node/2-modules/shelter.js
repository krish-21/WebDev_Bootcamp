const pets = require("./shelter");

console.log("Required an entire directory: ", pets);


// Output: 

// Required an entire directory:  {}
// (node:3565) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:3565) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:3565) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
// (node:3565) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency