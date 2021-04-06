const input = document.querySelector("input");
const h2 = document.querySelector("h2")


//
//  They don't trigger for non-input keys
//


// checks the difference only when we blur out
// input.addEventListener("change", function() {
//     h2.innerText = input.value;
//     console.log("CHANGE EVENT");
// });


// checks the difference on any input (eg. keys, pasting)
input.addEventListener("input", function(e) {
    h2.innerText = input.value;
    // console.log("INPUT EVENT");
    // console.log(e);
})