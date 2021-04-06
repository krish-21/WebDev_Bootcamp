// REST - Respresantional State Transfer
    // A set of guidelines on how client - server communication
    // and perform CRUD operations on a resource
        // Create Read Update Delete
        
        // Commnly using URL formatting & HTTP verbs

// app.get("/tacos", (req, res) => {
//     res.send("GET /tacos")
// });

// app.post("/tacos", (req, res) => {
//     const { meat, qty }  = req.body;
//     console.log(req.body);
//     res.send(`Okay, here are your ${qty} ${meat} tacos`);
// });



const express = require("express");
const app = express();

const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const { v4: uuid } = require("uuid");

// Fake Data
let comments = [
    {
        id: uuid(),
        username: "Qwerty",
        text: "Lol, that is so funny!",
    },
    {
        id: uuid(),
        username: "Uiop",
        text: "I like to go birdwatching with my dog",
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        text: "Plz delete your account Qwerty",
    },
    {
        id: uuid(),
        username: "onlysaywoof",
        text: "woof woof woof",
    },   
];


//
//  CRUD Blueprint
//

// GET: /comments - list all the comments
// POST: /comments - create a new comment
// GET: /comments/:id - get one comment (using ID)
// PATCH: /comments/:id - partially update one comment (using ID)
// PUT: /comments/:id - replace a comment (using ID)
// DELETE: /comments/:id - delete a comment (using ID)

    // Index    /comments           GET     Display all comments
    // New      /comments/new       GET     Form to create new comment
    // Create   /comments           POST    Creates new comment on server
    // Show     /comments/:id       GET     Details for one specific comment on server
    // Edit     /comments/:id/edit  GET     Form to edit specific comment on server
    // Update   /comments/:id       PATCH   Form to Partially Update specific comment on server
    // Delete   /comments/:id       DELETE  Deletes a specific item on server


app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

app.post("/comments", (req, res) => {
    // console.log(req.body);
    const { username, text } = req.body;
    comments.push({ username, text, id: uuid() })
    // res.send("It Worked!!!");
    
    // If found, responds with 302 Found
    // then, GET to specified path
    res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/details", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const { newText } = req.body;
    const comment = comments.find(c => c.id === id);
    comment.text = newText;
    res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
});

app.listen(3000, () => {
    console.log("ON PORT 3000");
});