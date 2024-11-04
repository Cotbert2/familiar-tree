import mongoose from "mongoose";

import { MONGODB_URI } from "./config.js";



const  connectDB = async () => {
    try{
        const dbConnection = await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected: ${dbConnection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }

};

export default connectDB;
