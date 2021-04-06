document.querySelector("button").addEventListener("click", function(evt) {
    console.log(evt);
});

const input = document.querySelector("input");
input.addEventListener("keydown", function(evt) {
    console.log("Key Down!");
    console.log(evt);
    console.log(evt.code);
    console.log(evt.key);
});
input.addEventListener("keyup", function() {
    console.log("Key Up!");
});

window.addEventListener("keydown", function(evt) {
    switch(evt.code) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("DOWN!");
            break;
        case "ArrowLeft":
            console.log("LEFT!");
            break;
        case "ArrowRight":
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
            break;
    }
});

