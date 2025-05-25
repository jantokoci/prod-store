import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ // setting the schema for the product
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // checks if it has createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
//giving the schema and the name to mongoose

export default Product;