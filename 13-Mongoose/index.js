const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


// {
//     title: "amadeus",
//     year: 1984,
//     score: 9.2,
//     rating: "R",
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

                // returns a class
const Movie = mongoose.model("Movie", movieSchema);

//                 // returns an instance
// const amadeus = new Movie({title: "Amadeus", year: 1984, score: 9.2, rating: "R"});
// need to save for above code

    // returns a Promise
// Movie.insertMany([
//     {title: "Amelie", year: 2001, score: 8.3, rating: "R"},
//     {title: "Alien", year: 1979, score: 8.1, rating: "R"},
//     {title: "The Iron Giant", year: 2001, score: 7.5, rating: "PG"},
//     {title: "Stand By Me", year: 2001, score: 8.6, rating: "R"},
//     {title: "Moonrise Kingdom", year: 2001, score: 7.3, rating: "PG-13"},
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!!!");
//         console.log(err);
//     });

// Movie.find({year: {$gte: 2000}}).then(data => console.log(data));

// Movie.updateOne({title: "The Iron Giant"}, {year: 1999}).then(res => console.log(res));

// Movie.updateMany({title: {$in: ["Amadeus", "Stand By Me"]}}, {score: 10}).then(res => console.log(res));

// Movie.findOneAndUpdate({title: "The Iron Giant"}, {score:7.8}, {new: true}).then(m => console.log(m));

// Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))

// Movie.findOneAndDelete({title: "Alien"}).then(m => console.log(m))
