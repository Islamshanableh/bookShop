const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema ({

    image:{type:String},
    name:{type:String , unique:true},
    type:{type:String},
    author:{type:String},
    description:{type:String},
    language:{tupe:String},
    price :{type:Number},
    rating :[{type:mongoose.Schema.Types.ObjectId,ref:"Rate"}]
    
    })
    module.export=mongoose.model("Book",bookSchema)

    