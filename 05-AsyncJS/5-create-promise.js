// new Promise((resolve, reject) => {
//     resolve();
//     reject();
// });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Your fake data here")
            } else {
                reject("Request Error!!!")
            }
        }, 1000);
    });
}

const req = fakeRequest("example.com");
req
    .then((data) => {
        console.log("Done with request");
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR");
        console.log(err);
    });


document.body.style.transition = "1s background-color";

// Changing Callback Hell

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         // if doNext exists, execute this
//         doNext && doNext();
//     }, delay);
// }

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange("red", 1000, () => {
//     delayedColorChange("orange", 1000, () => {
//         delayedColorChange("yellow", 1000, () => {
//             delayedColorChange("green", 1000, () => {
//                 delayedColorChange("blue", 1000, () => {
//                     delayedColorChange("indigo", 1000, () => {
//                         delayedColorChange("violet", 1000, () => {

//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

delayedColorChange("red", 1000)
.then(() => delayedColorChange("orange", 1000))
.then(() => delayedColorChange("yellow", 1000))
.then(() => delayedColorChange("green", 1000))
.then(() => delayedColorChange("blue", 1000))
.then(() => delayedColorChange("indigo", 1000))
.then(() => delayedColorChange("violet", 1000));


// So much better!!!