const mongoose= require("mongoose");
require('dotenv').config();

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the DB");
    } catch (error) {
        
        console.log("Some error occured in Connecting to the database");
        throw(error);
        
    }
    
}

module.exports=connectToDB;










