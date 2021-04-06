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

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise("example.com/index");
        console.log(data1);
        let data2 = await fakeRequestPromise("example.com/feature1")
        console.log(data2);
    } catch (e) {
        console.log("ERROR");
        console.log(e);
    }   
}

makeTwoRequests();

console.log("End of Script");
