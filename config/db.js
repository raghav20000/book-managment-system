const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jaswanthgoli99_db_user:lakshman@cluster0.bdngops.mongodb.net/?appName=Cluster0");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;