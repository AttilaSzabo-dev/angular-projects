const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
    name: {type: String, required: true},
    calAmount: {type: Number, required: true},
    pictureUrl: {type: String, required: true}
});

module.exports = mongoose.model("Ingredient", ingredientSchema);