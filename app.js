require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const {
    PORT,
    DB_URL
} = process.env;
const categories = require("./src/routes/categories");
const products = require("./src/routes/products");


app.use(express.json());
app.get("/",(req,res)=>{
    res.send({
        status:"running"
    })
});

//routes
app.use("/categories",categories);
app.use("/products",products);


app.listen(PORT,err=>{
    if(err) {
        console.log("Error in connection",err);
    } else {
        console.log("Server running in port",PORT);
        mongoose.connect(DB_URL,err=>{
            if(err) console.log("Error in DB connection",err);
            else console.log("DB Connected !");
        });
    }
});