const express = require("express");
const app = express();

// console.log(app)

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!");
//     // console.log(req);
//     // console.log(res);
    
//     // res.send("Hello!");
//     // res.send({color: "red", })
//     res.send("<h1>This is my webpage!</h1>");
// });

//
//  All apps are matched in order of definition
//

// Root path
app.get("/", (req, res) => {
    console.log("ROOT REQUEST");
    res.send("Welcome to the Homepage!");
});

// GET Routes
app.get("/cats", (req, res) => {
    console.log("GET: CAT REQUEST");
    res.send("GET: MEOW!!!");
});

app.get("/dogs", (req, res) => {
    console.log("DOG REQUEST");
    res.send("WOOF!!!")
});

// POST Routes
app.post("/cats", (req, res) => {
    console.log("POST: CAT REQUEST");
    res.send("POST: MEOW!!!");
});


//
//  Path Parameters
//  using Pattern Matching
//

app.get("/r/:subreddit", (req, res) => {
    console.log("GET: SUBREDDIT");
    console.log("req.params: ", req.params);
    const { subreddit } = req.params

    // res.send(`<h1>Browsing the ${req.params} subreddit`);    // Doesn't work....

    res.send(`<h1>Browsing the subreddit: ${subreddit}</h1>`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
    console.log("GET: SUBREDDIT");
    console.log("req.params: ", req.params);
    const { subreddit, postID } = req.params
    res.send(`<h1>Browsing the subreddit: ${subreddit}</h1> <h2>Viewing Post-ID: ${postID}</h2>`);
});


app.get("/search", (req, res) => {
    console.log(req.query);

    const { q, color } = req.query;

    if (!q) {
        res.send("<h3>Noting found if nothing searched</h3>");
    } else {
        res.send(`<h1>Search results for: ${q} with color as ${color}</h1>`);
    }
});


// Default for all other paths
app.get("*", (req, res) => {
    console.log("EVERYTHING ELSE");
    res.send("I don't know that path!");
});
