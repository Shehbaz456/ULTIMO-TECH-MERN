const mongoose = require('mongoose');

let URL = process.env.ATLAS_DB

let connectDB = async() => {
    try {
        await mongoose.connect(URL)
        console.log("Connted to ATLAS_DB");
    } catch (error) {
        console.log(`Database Connection Fail ${error}`);
        process.exit(0);
    }
}

module.exports = {connectDB} 