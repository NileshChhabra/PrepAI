const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Provide a sensible fallback to local MongoDB for development so the server
    // doesn't crash with an unclear 'uri must be a string' error when
    // MONGO_URI isn't defined. In production you should set MONGO_URI in env.
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/";

    if (!process.env.MONGO_URI) {
      console.warn(
        "Warning: MONGO_URI not set. Falling back to local MongoDB at mongodb://127.0.0.1:27017/prepai.\nIf you intended to use MongoDB Atlas set MONGO_URI in a .env file or your environment."
      );
    }

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected. ${conn.connection.host}`);
  } catch (error) {
    console.error("Error Connecting to MongoDB ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
