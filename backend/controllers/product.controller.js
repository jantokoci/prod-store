//using controller to make it clearer
import mongoose from "mongoose";
import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});  //finds all the product
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.error(`Error: ${e.message}`);
        res.status(500).json({success:false, message: "Server Error"});
    }}

export const deleteProduct = async(req, res) => {
    const {id} = req.params; //requiering the id

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Product not found!"}) //checking with another method if the id is valid
    }
    
    try {
        await Product.findByIdAndDelete(id); //find by id and delete
        res.status(200).json({success: true, message: "Product deleted"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
        console.log(`Error message: ${error.message}`);
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params; //requiring the id

    const product = req.body; //requiring the body of the product

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Product not found!"}) //checking with another method if the id is valid
    }

    try {
        const updatedProd = await Product.findByIdAndUpdate(id, product, { new: true }); //finding and updating the product
        res.status(200).json({success: true, data: updatedProd});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});

    }
}

export const createProduct = async (req,res) => {   //products route
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all fileds"}) //Checking if the datas are not null
    } // res status -> BAD REQUEST == 400

    const newProduct = new Product(product) //if not null then creating a new product with the data the user sent

    try {
        await newProduct.save();  // saving the new product
        res.status(201).json({success:true, data: newProduct}); // awaiting to save, respons status -> CREATED == 201
    } catch (e) {
        console.error(`Error: ${e.message}`);
        res.status(500).json({success:false, message: "Server Error"}); // res status -> SERVER ERROR == 500
    }
}

