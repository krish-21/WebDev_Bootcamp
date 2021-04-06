const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//
//  forEach
//

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print)

numbers.forEach(function (el) {
    console.log(el);
});

// for (let el of numbers) {
//     console.log(el);
// }

console.log("\n");

//
//  map     returns a new array after applying the call back
//

const doubles = numbers.map(function(num) {
    return 2 * num;
});

console.log(doubles);

console.log("\n");
