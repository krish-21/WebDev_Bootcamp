const h1 = document.querySelector("h1");
const button = document.querySelector("button");
let isDark = false;

document.body.style.textAlign = "center";

button.addEventListener("click", function() {
    let rgb = makeRandomColor();
    document.body.style.backgroundColor = rgb;
    h1.innerHTML = rgb;
    isDark ? h1.style.color = "white" : h1.style.color = "black";
});

const makeRandomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    (r + g + b) < 100 ? isDark = true : isDark = false;
    return `rgb(${r}, ${g}, ${b})`;
}
