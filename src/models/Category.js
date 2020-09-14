const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    categoryName: String
}, { timestamps: true });

module.exports = mongoose.model('category', categorySchema);