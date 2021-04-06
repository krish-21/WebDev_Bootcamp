// Destructuring an Array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstNum = nums[0];
const secondNum = nums[1];
const thirdNum = nums[2];

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);


console.log("\n");
console.log("\n");


const [ first, second, third, ...everythingElse ] = nums;

console.log(first);
console.log(second);
console.log(third);
console.log(everythingElse);

console.log("\n");
console.log("\n");


// Destructuring an Object

const user = {
    email: "krishna@gmail.com",
    password: "qwerty",
    firstName: "Krishna",
    lastName: "Nanduri",
    born: "2000",
    died: NaN,
    bio: "still building a life",
    city: "Hyderabad",
    state: "Andhra Pradesh",
};

const firstName_Old = user.firstName;
const lastName_Old = user.lastName;
const email_Old = user.email;

console.log(firstName_Old);
console.log(lastName_Old);
console.log(email_Old);

console.log("\n");
console.log("\n");

const {firstName, lastName, bio} = user;

console.log(firstName);
console.log(lastName);
console.log(bio);

const { born: birthYear } = user;

// console.log(born);   // doesn't work
console.log(birthYear);


console.log("\n");
console.log("\n");


const user2 = {
    email: "girl@gmail.com",
    firstName: "pretty",
    lastName: "girl",
    born: 1998,
    city: "anywhere",
    country: "dontCare",
};

const {city, country, state = "somewhere", born: birthYear2 = "1997"} = user2

console.log(city);
console.log(country);
console.log(state);     // fallback value used as value doesn't exist in object
console.log(birthYear2) // fallback value not used as value already exists in object


console.log("\n");
console.log("\n");


// Destructuring Params


function fullName_Old(user) {
    console.log(`${user.firstName} ${user.lastName}`);
}

function fullName_Better(user) {
    const { firstName, lastName } = user;
    console.log(`${firstName} ${lastName}`);
}

function fullName_Best({ firstName, lastName = "BlehBleh" }) {
    console.log(`${firstName} ${lastName}`);
}

fullName_Old(user);
fullName_Better(user);
fullName_Best(user);
fullName_Best({firstName: "BlahBlah"})


// Movies is an array of objects
// Each object is a movie with title, year & rating
movies = [{}, {}, {}]

movies.map(movie => {
    console.log(`${movie.title} (${movie.year}) is rated ${movie.score}`);
});

movies.map(({ title, score, year}) => {
    console.log(`${title} (${year}) is rated ${score}`);
});