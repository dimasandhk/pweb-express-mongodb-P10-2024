import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get the MongoDB URI from the environment variables
const mongoURI = process.env.MONGODB_URI;
console.log("mongoURI", mongoURI);
if (!mongoURI) {
  throw new Error("Missing MONGODB_URI in environment variables");
}

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
