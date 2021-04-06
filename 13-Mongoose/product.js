const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive"],
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        },
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
    },
});

productSchema.methods.greet = function() {
    console.log("Hello! Hi! Howdy!");
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model("Product", productSchema);



const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" });
    console.log(foundProduct);
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory("Outdoors");
    console.log(foundProduct);
}

// findProduct();


Product.fireSale().then(res => console.log(res));

// const bike = new Product({ name: "Mountain Bike", price: 599, onSale: true });

// bike.save()
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!");
//         console.log(err);
//         // console.log(err.errors.name.properties.message);
//     });


// const helmet = new Product({ name: "Bike Helmet", price: 29.50, categories: ["Safety", 10] });

// helmet.save()
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!");
//         console.log(err);
//     });


// const handPump = new Product({ name: "Hand Pump", price: 19.50, categories: ["Cycling"] });

// handPump.save()
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!");
//         console.log(err);
//     });


// Product.findOneAndUpdate({ name: "Hand Pump"}, { price: -14.50 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!");
//         console.log(err);
//     });


/*

const errProduct1 = new Product({ name: "Bike Helmet from helmet maker company", price: 29.50 });

errProduct1.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!");
        console.log(err);
    });

const errProduct2 = new Product({ name: "Bike Helmet", price: 29.50, categories: ["Safety", []] });

errProduct2.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!");
        console.log(err);
    });

*/

// const errProduct3 = new Product({ name: "Cycling Jersey", price: 19.50, categories: ["Cycling"], size: 'XS' });

// errProduct3.save()
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!");
//         console.log(err);
//     });