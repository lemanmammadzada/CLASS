import { configDotenv } from "dotenv";
import mongoose, { mongo } from "mongoose";
configDotenv();
export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected ${connect.connection.host}');
    } catch (error) {
        console.log(error);
    };
};
