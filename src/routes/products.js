const router = require("express").Router();
const Category = require("../models/Category");
const Product = require("../models/Product");
router.post("/insertMany",async (req,res)=>{
    //will clear products before proceeding
    await Product.deleteMany({});
    let categories = ['Electronics','Men Fashion','Women Fashion','Footwear','Accessories','Home Appliances']; //initializing the categories.

    //assigning product name as the key and index of categories as a value. 
    let products = {
        "Lenovo Yoga Laptop":0,
        "Lenovo Thinkpad":0,
        "Apple Macbook Air":0,
        "Mi Horizon Laptop":0,
        "Amazon Alexa":0,
        "Amazon Firestick":0,
        "Avengers Printed T-Shirt":1,
        "Ironman Printed T-Shirt":1,
        "Batman Printed T-Shirt":1,
        "Allen Solly White Shirt":1,
        "Blue Lined Salwar":2,
        "Wonder Women T-Shirt":2,
        "Women Sunglass Buy 1 Get 2":2,
        "PUBG T-Shirt":2,
        "Caption America Sneakers":3,
        "Bathroom Slipper":3,
        "Blackpanther slipper":3,
        "Adidas sliders":3,
        "Boat Extrabass earphones":4,
        "JBL GO":4
    };

    //getting all categories
    let allCategories = await Category.find({},{categoryName:1}).lean();

    //creating allProducts array as param of insertMany
    let allProducts = Object.keys(products).map(product=>{
        return {
            productName:product,
            categoryId:(allCategories.find(obj=>String(obj.categoryName).toLowerCase()===String(categories[products[product]]).toLowerCase()))._id,
            price:Math.random()*10000
        }
    });
    Product.insertMany(allProducts,err=>{
        if(err) res.status(500).send({message:"Error in inserting products !",error:err});
        else res.send({message:"Success !"});
    });
});

module.exports = router;