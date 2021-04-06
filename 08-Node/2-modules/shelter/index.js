const ratchet = require("./ratchet");
const tiger = require("./tiger");
const shadow = require("./shadow");

const allPets = [ratchet, tiger, shadow];
console.log(allPets);

// module.exports = allPets;

export default allPets;