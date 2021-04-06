const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be blank"],
    },
    hash: {
        type: String,
        required: [true, "Password cannot be blank"],
    },
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("hash")) return next();
    this.hash = await bcrypt.hash(this.hash, 12);
    next();
});

userSchema.statics.authenticate = async function(username, password) {
    const foundUser = await this.findOne({ username });
    if (!foundUser) return false;
    const isValid = await bcrypt.compare(password, foundUser.hash);
    return isValid ? foundUser : false;
}

const User = mongoose.model("User", userSchema);

module.exports = User;