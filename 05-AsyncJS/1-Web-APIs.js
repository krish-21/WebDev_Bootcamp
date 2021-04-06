console.log("Sending request to server");
setTimeout(() => {
    console.log("Here is your data from the server");
}, 3000);
console.log("I AM AT THE END OF THE FILE!")


// Use loupe to visualize

// Browsers come with Web APIs that are able to handle certain tasks in the background
    // (like making request or setTimeout)

// The JS call stack recoginzes these Web API functions and passes them off to the browser to take care of

// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback