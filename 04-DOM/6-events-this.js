const makeRandomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    (r + g + b) < 100 ? isDark = true : isDark = false;
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

for(let button of buttons) {
    button.addEventListener("click", function () {
        button.addEventListener("click", colorize);
    });
}



for(let h1 of h1s) {
    h1.addEventListener("click", colorize);
}


function colorize() {
    console.log(this);
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}