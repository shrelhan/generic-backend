import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "mongo db connected | db host",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.error("connection failed");
    process.exit(1);
  }
};

export default connectDB;
