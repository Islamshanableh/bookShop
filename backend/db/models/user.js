const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    country:{type:String},
    phoneNumber:{type:Number},
    BirthDate:{type:Number},
    email:{type:String},
    password:{tupe:String},
    favorite :[{type:mongoose.Schema.Types.ObjectId,ref:"Favorite"}],
    cart :[{type:mongoose.Schema.Types.ObjectId,ref:"Cart"}]

})
module.export=mongoose.model("User",userSchema)







