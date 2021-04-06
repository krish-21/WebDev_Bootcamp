const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//
//  Filter
//  Returns a new array based on Boolean Callback
//

console.log(numbers.filter(n => n < 10)); 


console.log("\n");


//
//  Every
//  Returns true if all elements return true based on Boolean Callback
//

console.log(numbers.every(num => num >= 10));


console.log("\n");


//
//  Filter
//  Returns true if at least one elements return true based on Boolean Callback
//

console.log(numbers.some(num => num >= 15));


console.log("\n");


//
//  Reduce
//  Reduces the whole array to a single value based on Callback
//  Callback should be a Reducer Function
//  (accumulator, currentValue) ={
//      return accumulator + currentValue;
//  }

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total);

const totalPrice = prices.reduce((total, price) => total + price);
console.log(totalPrice);


console.log("\n");


const minPrice = prices.reduce((min, price) => {
    if (price < min) return price;
    return min;
});
console.log(minPrice);


console.log("\n");


const evens = [2, 4, 6, 8];
console.log(evens.reduce((sum, num) => sum + num))
console.log(evens.reduce((sum, num) => sum + num, 100))