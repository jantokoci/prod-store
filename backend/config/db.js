import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); //connect to the database with mongoose, log to console
        console.log(`MongoDB Connectedd: ${conn.connection.host}`)
    }catch(e){
        console.log(`Error: ${e.message}`);
        process.exit(1); //process 1 code means exit with failure, 0 means success
    }
}