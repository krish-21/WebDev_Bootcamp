//
//  App will crash as location moved after using it
//

const express = require("express");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

app.use(morgan("dev"));


app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

app.use("/dogs", (req, res, next) => {
    console.log("Inside /dogs Middleware");
    next();
});

const verifyPassword = (req, res, next) => {
    console.log(req.query);
    const { pwd } = req.query;
    if (pwd === "secret") {
        next();
    }

    // res.send("Sorry, you need a password");
    
    // res.status(401);
    // throw new Error("Password Rwquired")

    throw new AppError(401, "Password Required");
}


app.get("/", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("Home Page");
});

app.get("/error", (req, res) => {
    chicken.fly();
});

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("Woof Woof!");
});

app.get("/secret", verifyPassword, (req, res) => {
    res.send("This is a secret page");
});

app.get("/admin", (req, res) => {
    throw new AppError(403, "Not an Admin");
})

app.use((req,res) => {
    res.status(404).send("Not found!");
});

// app.use((err, req, res, next) => {
//     console.log("****************************************************");
//     console.log("                       ERROR                          ");
//     console.log("****************************************************");
//     console.log(err);
//     console.log("****************************************************");
//     // res.status(500).send("ERROR!");
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("Serving on Port 3000");
});