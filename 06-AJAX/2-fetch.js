
// Promise Version
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// .then(res => {
//     console.log("RESPONSE: (Waiting to parse) ", res);
//     // returns a promise
//     return res.json();
// })
// .then(data => {
//     console.log("PARSED DATA: ", data);
//     console.log(data.ticker.price);
//     // for second request
//     return fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// })
// .catch(err => {
//     console.log("ERRPR: ", err);
// });


// Async Await
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log("RESPONSE: (Waiting to parse) ", res);
        const data = await res.json();
        console.log("PARSED DATA: ", data);
        console.log(data.ticker.price)
    } catch (err) {
        console.log("ERROR: ", err);
    }
    
}

fetchBitcoinPrice();