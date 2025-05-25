import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config(); //translates the .env file

const app = express();

app.post("/products", async (req,res) => {   //products route
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all fileds"}) //Checking if the datas are not null
    } // res status -> BAD REQUEST == 400

    const newProduct = new Product(product) //if not null then creating a new product with the data the user sent

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct}) // awaiting to save, respons status -> CREATED == 201
    } catch (e) {
        console.error(`Error: ${e.message}`)
        res.status(500).json({success:false, message: "Server Error"}) // res status -> SERVER ERROR == 500
    }
});

//POSTMAN DESKTOP APPLICATION (TO TEST THE ENDPOINT) -> Without the user and frontend

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000"); //server port
})

