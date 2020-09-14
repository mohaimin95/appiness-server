const router = require("express").Router();
const Category = require("../models/Category");
router.post("/insertMany", async (req, res) => {
    //will clear all categories before proceeding
    await Category.deleteMany({});
    let categories = ['Electronics', 'Men Fashion', 'Women Fashion', 'Footwear', 'Accessories', 'Home Appliances']; //initializing some categories
    let categoriesObjects = categories.map(category => ({ categoryName: category.toLowerCase() })); // making the array of objects for insertMany operation
    Category.insertMany(categoriesObjects, err => { //inserting into collections.
        if (err) res.status(500).send({ message: "Error in inserting categories !", error: err });
        else res.send({ message: "Success !" });
    })
});
router.get("/", (req, res) => {
    Category.aggregate([
        // trying to add reference to the products collections
        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "categoryId",
                as: "products"
            }
        },
        //trying to project the needed feilds
        {
            $project: {
                categoryName: 1,
                productsCount: {
                    $size: "$products" //getting the length of the products.
                }
            }
        }
    ]).then(data => res.send({ data }))
        .catch(err => res.status(500).send({ message: "Error in getting categories !", error: err }))
})
module.exports = router;