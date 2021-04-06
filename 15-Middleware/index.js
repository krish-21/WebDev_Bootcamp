const express = require("express");
const app = express();
const morgan = require("morgan");

// morgan("tiny");

// app.use(morgan("dev"));

// app.use((req, res, next) => {
//     console.log("This is my first Midleware");
//     next();
//     console.log("This is my first Midleware - AFTER CALLING NEXT()");
// });

// app.use((req, res, next) => {
//     console.log("This is my second Midleware");
//     return next();
//     console.log("This is my second Midleware - AFTER CALLING NEXT()");
// });

// app.use((req, res, next) => {
//     console.log("This is my third Midleware");
//     next();
//     console.log("This is my third Midleware - AFTER CALLING NEXT()");
// });

const verifyPassword = (req, res, next) => {
    console.log(req.query);
    const { pwd } = req.query;
    if (pwd === "secret") {
        next();
    }

    res.send("Sorry, you need a password")
}

app.use("/dogs", (req, res, next) => {
    console.log("Inside /dogs Middleware");
    next();
})

app.get("/", (req, res) => {
    // undefined
    // console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("Home Page");
});

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("Woof Woof!");
});

app.get("/secret", verifyPassword, (req, res) => {
    res.send("This is a secret password");
});

app.use((req,res) => {
    res.status(404).send("Not found!");
});

app.listen(3000, () => {
    console.log("Serving on Port 3000");
});