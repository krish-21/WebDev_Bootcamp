const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // let username = document.querySelectorAll("inpuy")[0].value;
    // let tweet = document.querySelectorAll("inpuy")[1].value;
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    
    // append the tweet into the document
    addTweet(usernameInput.value, tweetInput.value);
    
    // clear the inputs
    usernameInput.value = "";
    tweetInput.value = "";
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}
