const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");

const User = require("./models/User");

// DB Connection
mongoose.connect("mongodb://localhost:27017/authDemo", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// DB Connection Validation
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});


const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "notagoodsecret", resave: false, saveUninitialized: true }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/login");
    }
    next();
}

app.get("/", (req, res) => {
    res.send("This is the homepage");
})

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body
    const newUser = new User({ username, hash: password });
    await newUser.save();
    req.session.user_id = newUser._id;
    res.redirect("/");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.authenticate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect("/secret");
    } else {
        res.redirect("/login");
    }
});

app.post("/logout", (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect("/login")
});

app.get("/secret", requireLogin, (req, res) => {
    res.render("secret");
});

app.get("/topsecret", requireLogin, (req, res) => {
    res.send("TOP SECRET!");
})

app.listen(3000, () => {
    console.log("Serving on Port 3000");
})