const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/Product");
const Farm = require("./models/Farm")

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!");
        console.log(err);
    });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "diary"];


// Farm Routes

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({});
    res.render("farms/index", { farms });
})

app.get("/farms/new", (req, res) => {
    res.render("farms/new");
});

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate("products");
    res.render("farms/details", { farm })
});

app.delete("/farms/:id", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findByIdAndDelete(id);
    res.redirect("/farms/")
});

app.post("/farms", async (req, res) => {
    const { name, city, email} = req.body;
    const farm = new Farm({ name, city, email });
    await farm.save();
    res.redirect("/farms");
});


app.get("/farms/:id/products/new", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("products/new", { categories, farm });
});

app.post("/farms/:id/products", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const newProduct = new Product({ name, price, category });
    
    // 2-way relationship
    farm.products.push(newProduct);
    newProduct.farm = farm;

    await farm.save();
    await newProduct.save();
    
    res.redirect(`/farms/${id}`);
});


// Product Routes

app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render("products/index", { products, category })
    } else {
        const products = await Product.find({});
        res.render("products/index", { products, category: "All" });
    }
});

app.get("/products/new", (req, res) => {
    res.render("products/new", { categories });
});

app.post("/products", async (req, res) => {
    const { name, price, category } = req.body;
    const newProduct = new Product({name: name, price: price, category: category});
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate("farm", "name");
    console.log(product);
    res.render("products/details", { product });
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const product = await Product.findByIdAndUpdate(id, {name: name, price: price, category: category}, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
});

app.listen(3000, () =>{
    console.log("App is listening on Port 3000");
});

