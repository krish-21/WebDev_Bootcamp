// One to Few

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoRelationships", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("MONGO CONNECTION OPEN");
}).catch(() => {
    console.log("MONGO CONNECTION ERROR");
});

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String,
        }
    ],
});


const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Krishna",
        last: "Nanduri",
    });
    
    u.addresses.push({
        street: "Ramanathapuram",
        city: "Coimbatore",
        state: "Tamil Nadu",
        country: "India",
    });

    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: "Sassoon Road",
        city: "Hong Kong",
        state: "Hong Kong SAR",
        country: "China"
    })

    const res = await user.save();
    console.log(res);
}

// makeUser();
addAddress("6062cd38b9a98a2defdc3db4")