const bcrypt = require("bcrypt");

// const hashPassword = async (password) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(password, salt)
//     console.log(salt);
//     console.log(hash);
//     return hash;
// }

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 12);
    console.log(hash);
    return hash;
}

const login = async (password, hash) => {
    const res = await bcrypt.compare(password, hash);
    if (res) {
        console.log("Login Succesful!")
    } else {
        console.log("Incorrect!");
    }
}


// hashPassword("password");

// login("password", "");

// login("passwords", "");