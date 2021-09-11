const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema ({

    image:{type:String},
    name:{type:String , unique:true},
    type:{type:String},
    author:{type:String},
    description:{type:String},
    language:{tupe:String},
    price :{type:Number},
    rating :[Number]
    
    })
    module.exports=mongoose.model("Book",bookSchema)

    