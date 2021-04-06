document.body.style.transition = "1s background-color";

    // too much calculations, can easily go wrong
    // hard to maintain
    // sometime, we might not know the time

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
// }, 3000);



    // writing callbacks
    // but individual functions

setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "orange";
        setTimeout(() => {
            document.body.style.backgroundColor = "yellow";
            setTimeout(() => {
                document.body.style.backgroundColor = "green";
                setTimeout(() => {
                    document.body.style.backgroundColor = "blue";
                    setTimeout(() => {
                        document.body.style.backgroundColor = "indigo";
                        setTimeout(() => {
                            document.body.style.backgroundColor = "indigo";
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



    // better abstraction

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // if doNext exists, execute this
        doNext && doNext();
    }, delay);
}

delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("yellow", 1000, () => {
            delayedColorChange("green", 1000, () => {
                delayedColorChange("blue", 1000, () => {
                    delayedColorChange("indigo", 1000, () => {
                        delayedColorChange("violet", 1000, () => {

                        });
                    });
                });
            });
        });
    });
});
