const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable", "diary"],
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: "Farm",
    }
});

const product = mongoose.model("Product", productSchema);

module.exports = product;