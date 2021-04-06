const button = document.querySelector("#btn2");
const container = document.querySelector("#container");

button.addEventListener("click", function(event) {
    container.style.backgroundColor = makeRandColor();
    event.stopPropagation();
});

// event will be activated even when button is clicked
container.addEventListener("click", function() {
    container.classList.toggle("hide");
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}