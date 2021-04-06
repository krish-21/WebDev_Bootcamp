const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


const personSchema = new mongoose.Schema({
    first: String,
    last: String,
});

// Mongoose Virtuals


personSchema.virtual("fullname").
    get(function() {
        return `${this.first} ${this.last}`
    }).
    set(function(name) {
        this.first = name.substring(0, name.indexOf(' '));
        this.last = name.substring(name.indexOf(' ') + 1);
    });




// Mongoose Middleware


personSchema.pre("save", async function() {
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to save");
});

personSchema.post("save", async function() {
    console.log("Just saved");
});

const Person = mongoose.model("Person", personSchema);

