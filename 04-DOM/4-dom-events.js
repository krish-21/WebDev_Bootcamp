//
//  V1
//

const btn = document.querySelector("#v2");

// still not the best approach
btn.onclick = function() {
    console.log("You clicked me!");
}

function scream() {
    console.log("AAAAAAAAAAHHHHHHH");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert("You clicked the h1!");
}


//
//  V3
//

const button = document.querySelector("#v3");

// best practice
button.addEventListener("click", function() {
    console.log("CLICKED!");
});

function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

tasButton.addEventListener("click", twist, {once: true});
tasButton.addEventListener("click", shout);
