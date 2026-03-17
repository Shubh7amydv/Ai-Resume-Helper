const mongoose=require("mongoose");
const { applyTimestamps } = require("./user.model");


const blacklistTokenSchema=new mongoose.Schema({
     token: {
        type: String,
        required : [true,"You need to have token atleast to put it in blacklist "]
     }
     
})

const tokenBlacklistModel=mongoose.model("blackListToken",blacklistTokenSchema)

module.exports=tokenBlacklistModel;