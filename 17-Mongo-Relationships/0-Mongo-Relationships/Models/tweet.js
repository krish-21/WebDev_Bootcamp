// One to Many

const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/mongoRelationships", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("MONGO CONNECTION OPEN");
}).catch(() => {
    console.log("MONGO CONNECTION ERROR");
});

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: "User"},
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
    const user = new User({ username: "kronos", age: 21 });
    const tweet = new Tweet({ text: "Winner Winner Chicken Dinner", likes: 0});
    tweet.user = user;
    
    const res1 = await user.save();
    console.log(res1);
    
    const res2 = await tweet.save();
    console.log(res2) // will show populated user in node // Actually, only ObjectID will be stored in Mongo 
}
// makeTweets();

const addTweet = async () => {
    const user = await User.findOne({ username: "kronos"});
    const newTweet = new Tweet({ text: "Lord of Time", likes: 21000});
    newTweet.user = user;
    
    const res = await newTweet.save();
    console.log(res);
};
// addTweet();

const showTweets = async () => {
    const tweet = await Tweet.findOne({});
    console.log(tweet); // only shows user's id

                                            // name of field // NOT name of model
    const popTweet = await Tweet.findOne({}).populate("user");
    console.log(popTweet);

                                                                // extract specific fields
    const popTweetName = await Tweet.findOne({}).populate("user", "username");
    console.log(popTweetName);

    const popAllTweets = await Tweet.find({}).populate("user");
    console.log(popAllTweets);
}
showTweets();