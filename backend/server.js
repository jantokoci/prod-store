import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config(); //translates the .env file

const app = express();

const PORT = process.env.PORT

app.use(express.json()); //allows us to accept JSON data in the req.body (middleware)

app.use("/api/products", productRoutes); //using the routes and the endpoints from here, to look more clear

app.listen(PORT, () => {
    connectDB(); //connect to the database function
    console.log("Server started at http://localhost:", PORT); //server port
})

