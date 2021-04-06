const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions = {
    secret: "thisisnotagoodsecret",
    resave: false,
    saveUninitialized: false,
};

app.use(session(sessionOptions));
app.use(flash());

const Farm = require("./models/Farm")

mongoose.connect('mongodb://localhost:27017/farmStandFlash', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!");
        console.log(err);
    });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))


const categories = ["fruit", "vegetable", "diary"];


// Farm Routes

app.use((req, res, next) => {
    res.locals.messages = req.flash("success");
    next();
});

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({});
    res.render("farms/index", { farms });
})

app.get("/farms/new", (req, res) => {
    res.render("farms/new");
});

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("farms/details", { farm })
});

app.post("/farms", async (req, res) => {
    const { name, city, email} = req.body;
    const farm = new Farm({ name, city, email });
    await farm.save();
    req.flash("success", "Successfully Created a New Farm");
    res.redirect("/farms");
});

app.listen(3000, () =>{
    console.log("App is listening on Port 3000");
});

