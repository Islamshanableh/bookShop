const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema ({

    image:{type:String,require:true},
    name:{type:String,require:true},
    type:{type:String},
    author:{type:Number},
    description:{type:Number},
    description:{type:String},
    language:{tupe:String},
    price :{type:Number},
    rating :[{type:mongoose.Schema.Types.ObjectId,ref:"Rate"}]
    
    })
    module.export=mongoose.model("Book",bookSchema)

    