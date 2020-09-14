const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const productSchema = new mongoose.Schema({
    productName: String,
    categoryId: ObjectId,
    price: Number
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);