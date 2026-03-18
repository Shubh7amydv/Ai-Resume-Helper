const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique : [true,"Username already taken"]
    },

    email: {
        type:String,
        unique:[true,"Email address is already taken by some account"],
        required: true
    },

    password : {
        type:String,
        unique:[false],
        required:true
    }

})

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;
