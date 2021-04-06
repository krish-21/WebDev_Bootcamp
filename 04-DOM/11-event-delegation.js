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


// attatches the event only to existing li elements. 
// new li elements added via the form will not have delete functionality
// const lis = document.querySelectorAll("li");
// for(let li of lis) {
//     li.addEventListener("click", function() {
//         li.remove();
//     });
// }


// using event delegation
tweetsContainer.addEventListener("click", function(event) {
    // console.log(event);
    // console.log(event.target);
    // boolean AND  // if left side is false, right side will never evalue
    event.target.nodeName === "LI" && event.target.remove();
});