import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
        serverSelectionTimeoutMS: 5000, // Faster failure if connection is impossible
    })

}

export default connectDB;