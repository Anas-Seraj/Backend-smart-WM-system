import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "PLease define the MONGODB_URI enviroment variable inside .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit();
  }
};

export default connectToDatabase;
