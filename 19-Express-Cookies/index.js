const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser("ThisIsMySecret"));

app.get("/greet", (req, res) => {
    const { name = "noName" } = req.cookies;
    res.send(`Hey there ${name}!`);
});

app.get("/setname", (req, res) => {
    res.cookie("name", "Shadow");
    res.cookie("animal", "dog")
    res.send("Sent a Cookie");
});

app.get("/getsignedcookie", (req, res) => {
    res.cookie("fruit", "grape", { signed: true });
    res.send("Signed Cookie Sent");
});

app.get("/verifyfruit", (req, res) => {
    console.log(req.cookies);
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log("SERVING!");
});