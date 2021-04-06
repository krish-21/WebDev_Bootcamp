// import express from "express";           // ES6
const express = require("express");
const app = express();
// import { join } from "path";             // ES6
const path = require("path");

const redditData = require("./data.json");
// console.log(redditData)

// to use CSS
app.use(express.static(path.join(__dirname, "public")));

// Setting the view engine
app.set("view engine", "ejs");

// setting the path so that views can be accessed when node is run from anywhere
// app.set("views", join(__dirname, "/views"));         // ES6

// __dirname is the directory name of index.js
// doesn't care about where we executed
app.set("views", path.join(__dirname, "/views"));


// homepage
app.get("/", (req, res) => {
    // no need to add .ejs as view engine is set to EJS
    res.render("home");
});

app.get("/rand", (req, res) => {
    const randNum = Math.floor(Math.random() * 10) + 1;
    // res.render("random", {randNum: randNum});
    res.render("random", { randNum });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    // res.render("subreddit", { subreddit });

    const data = redditData[subreddit]
    // console.log(data);
    if (data) {
        res.render("subreddit", { ...data });
    } else {
        res.render("notfound", { subreddit });
    }
    
    
});

app.get("/pets", (req, res) => {
    const pets = ["Shadow", "Ratchet", "Spot", "Tiger", "Milky"];
    res.render("pets", { pets });
});

// running thr app on Port 3000
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});