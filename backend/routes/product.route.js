import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//put for update all the fields patch for update some of the fields
router.put("/:id", updateProduct);

//getting all the products from the database
router.get("/", getProducts); //controller

//creating a product into the database
router.post("/", createProduct);

//deleting product from the database by id
router.delete("/:id", deleteProduct); //controller

//POSTMAN DESKTOP APPLICATION (TO TEST THE ENDPOINT) -> Without the user and frontend

export default router;