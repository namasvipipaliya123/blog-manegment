const mongoose = require('mongoose')

const dbconnect = async () => {
    await mongoose.connect('mongodb://localhost:27017/Blog');
    console.log("Connectied to MongoDB");

};

module.exports = dbconnect;