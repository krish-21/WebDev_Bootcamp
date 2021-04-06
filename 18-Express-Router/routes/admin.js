const express = require("express");
const router = express.Router();

router.use((req, res, next) =>{
    if (req.query.isAdmin) {
        next();
    } else {
        res.send("Sorry, Not an Admin")
    }
});

router.get("/topsecret", (req, res) => {
    res.send("This is Top Secret");
});

router.get("/deleteall", (req, res) => {
    res.send("Wiped All Data");
});

module.exports = router;