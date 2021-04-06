// One to Many

const mongoose = require("mongoose");
const { Schema } = mongoose;

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

const productSchema = new Schema({
    name: "String",
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"],
    },
});

const Product = mongoose.model("Product", productSchema);

const insertProducts = async () => {
    const res = await Product.insertMany([
        {name: "Goddess Melon", price: 4.99, season: "Summer"},
        {name: "Sugar Baby Watermelon", price: 4.99, season: "Summer"},
        {name: "Asparagus", price: 3.99, season: "Spring"},
    ]);

    console.log(res);
}
// insertProducts();


const farmSchema = new Schema({
    name: String,
    location: String,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Farm = mongoose.model("Farm", farmSchema);

const insertFarms = async () => {
                                            // spelling
    const farm = new Farm({ name: "Full Belly Famrs", location: "Guinda, CA"});
    const melon = await Product.findOne({ name: "Goddess Melon"});

    farm.products.push(melon);
    console.log(farm);

    const res = await farm.save();
    console.log(res);
    // it shows product embedded in the farm object but that's just mongoose behavious
    // in mongo shell, it displays only the id
};
// insertFarms();

const addProduct = async () => {
                                                    // spelling
    const farm = await Farm.findOne({ name: "Full Belly Famrs" })
    const watermelon = await Product.findOne({ name: "Sugar Baby Watermelon" });
    farm.products.push(watermelon)
    
    const res = await farm.save();
    console.log(res)
}
// addProduct();


const displayFarm = async () => {
    // will not populate the products array
    // will display only the ObjecIDs
    const res1 = await Farm.findOne({ name: "Full Belly Famrs"});
    console.log(res1);

    // To populate the products array
        // Farm.findOne({ name: "Full Belly Famrs"})
        //     .populate("product")
        //     .then(farm => console.log(farm));                // name of field // NOT name of model
    const res2 = await Farm.findOne({ name: "Full Belly Famrs"}).populate("products");
    console.log(res2);
}
displayFarm();