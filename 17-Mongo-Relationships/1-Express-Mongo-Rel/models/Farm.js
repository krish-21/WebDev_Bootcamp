const mongoose = require("mongoose");
const Product = require("./Product")
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, "Farm must have a name!"],
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

// Query Middleware

// runs before the query
farmSchema.pre("findOneAndDelete", async function(data) {
    console.log("PRE MIDDLEWARE");
    console.log(data);
});

// runs after the query
farmSchema.post("findOneAndDelete", async function(farm) {
    console.log("POST MIDDLEWARE");
    
    // products: [123123123, 12312313123, 1231245]
    if(farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
    console.log(farm);
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;