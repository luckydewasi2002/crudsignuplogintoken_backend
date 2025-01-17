// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true,
//         unique: true
//     },
// });

// module.exports=mongoose.model("User",userSchema)




const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,
        },
    },
    {timestamps:true,versionKey:false}
);
module.exports =  mongoose.model("User",userSchema)