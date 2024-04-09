const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    // MongoDB connection URI
    const mongoURI = process.env.MONGODB_URI;

    // Connect to MongoDB
    await mongoose.connect(mongoURI)
        .then(()=>{
            console.log("DB connection successful.");
        })
        .catch((err)=>{
            console.log(`DB connection error:${err}`);
        });
};

module.exports = connectDB;