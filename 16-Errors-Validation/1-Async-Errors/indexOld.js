// Using simple try/catch

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const AppError = require("./AppError");

const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!");
        console.log(err);
    });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "diary"];


app.get("/products", async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            res.render("products/index", { products, category });
        } else {
            const products = await Product.find({});
            res.render("products/index", { products, category: "All" });
        }
    } catch (err) {
        next(err);
    }
});

app.get("/products/new", (req, res) => {
    res.render("products/new", { categories });
});

app.post("/products", async (req, res, next) => {
    try {
        const { name, price, category } = req.body;
        const newProduct = new Product({name: name, price: price, category: category});
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    } catch (err) {
        next(err);
    }
});


app.get("/products/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product) {
            throw new AppError(404, "Product not found");
        }
        res.render("products/details", { product });
    } catch (err) {
        next(err);
    }
});

app.get("/products/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        if(!product) {
            throw new AppError(404, "Product not found");
        }
        res.render("products/edit", { product, categories });
    } catch (err) {
        next(err);
    }
});

app.put("/products/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;
        const product = await Product.findByIdAndUpdate(id, {name: name, price: price, category: category}, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
    } catch (err) {
        next(err);
    }
});

app.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect("/products");
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(3000, () =>{
    console.log("App is listening on Port 3000");
});

