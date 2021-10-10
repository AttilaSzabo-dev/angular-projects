const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    recipeName: {type: String, required: true},
    recipePictureUrl: {type: String, required: false},
    allCal: {type: Number, required: true},
    allWeight: {type: Number, required: true},
    ingredients: {type: [], required: true}
});

module.exports = mongoose.model("Recipe", recipeSchema);