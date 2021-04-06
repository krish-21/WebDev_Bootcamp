document.body.style.transition = "1s background-color";

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange("red", 1000)
// .then(() => delayedColorChange("orange", 1000))
// .then(() => delayedColorChange("yellow", 1000))
// .then(() => delayedColorChange("green", 1000))
// .then(() => delayedColorChange("blue", 1000))
// .then(() => delayedColorChange("indigo", 1000))
// .then(() => delayedColorChange("violet", 1000));

async function rainbow() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);
    // returns a resolved promisse
    return "All Done!"
}

// rainbow()
// .then(() => console.log("End of Rainbow!"));

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow!")
}

printRainbow();

console.log("End of Script");
