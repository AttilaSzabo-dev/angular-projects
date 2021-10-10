const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Ingredient = require("./models/ingredient");
const Recipe = require("./models/recipe");

const app = express();

mongoose.connect("mongodb+srv://admin-bruce:Q838_cs3Xf.iaGa@cluster0.ejt1y.mongodb.net/dietTracker?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database!")
}).catch(() => {
    console.log("Connection failed!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

//ingredients 
app.post("/api/ingredients", (req, res, next) => {
    const ingredient = new Ingredient({
        name: req.body.name,
        calAmount: req.body.calAmount,
        pictureUrl: req.body.pictureUrl
    });
    ingredient.save().then(createdIngredient => {
        res.status(201).json({
            message: "Ingredient added successfully",
            ingredientId: createdIngredient._id
        });
    });
});

app.get("/api/ingredients", (req, res, next) => {
    Ingredient.find().then(documents => {
        res.status(200).json({
            message: "Ingredient fetched successfully!",
            ingredients: documents
        });
    });
});

app.delete("/api/ingredients/:id", (req,res, next) => {
    Ingredient.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: "Ingredient deleted!"});
    });
});

//recipes
app.post("/api/recipes", (req, res, next) => {
    const recipe = new Recipe({
        recipeName: req.body.recipeName,
        recipePictureUrl: req.body.recipePictureUrl,
        allCal: req.body.allCal,
        allWeight: req.body.allWeight,
        ingredients: req.body.ingredients
    });
    recipe.save().then(createdRecipe => {
        res.status(201).json({
            message: "Recipe added successfully",
            recipeId: createdRecipe._id
        });
    });
});

app.get("/api/recipes", (req, res, next) => {
    Recipe.find().then(documents => {
        res.status(200).json({
            message: "Recipe fetched successfully!",
            recipes: documents
        });
    });
});

app.delete("/api/recipes/:id", (req,res, next) => {
    Recipe.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: "Recipe deleted!"});
    });
});

module.exports = app;