const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}


// Promise is an object
// pending -> resolved or rejected

// const request1 = fakeRequestPromise("example.com/index");
// request1
//     .then((data) => {
//         console.log("SUCCESS! (1)");
//         console.log(data);
//         // no need to make the promise a variable
//         // fakeRequestPromise("example.com/feature3")
//         // .then(() => {})
//         // .catch(() => {})
//         const request2 = fakeRequestPromise("example/feature1");
//         request2
//             .then((data) => {
//                 console.log("SUCCESS! (2)");
//                 console.log(data);
//                 const request3 = fakeRequestPromise("example.com/feature3");
//                 request3
//                     .then((data) => {
//                         console.log("SUCCESS! (3)");
//                         console.log(data);
//                     })
//                     .catch((err) => {
//                         console.log("ERROR (2)");
//                         console.log(err);
//                     });
//             })
//             .catch((err) => {
//                 console.log("ERROR (2)");
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log("ERROR (1)");
//         console.log(err);
//     });


const request1 = fakeRequestPromise("example.com/index");
request1
    .then((data) => {
        console.log("SUCCESS! (1)");
        console.log(data);
        // no need to make the promise a variable
        // return fakeRequestPromise("example.com/feature1")
        const request2 = fakeRequestPromise("example.com/feature1");
        return request2;
    })
    .then((data) => {
        console.log("SUCCESS! (2)");
        console.log(data);
        const request3 = fakeRequestPromise("example.com/feature2");
        return request3;
    })
    .then((data) => {
        console.log("SUCCESS! (3)");
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })