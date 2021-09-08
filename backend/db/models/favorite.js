const mongoose = require('mongoose');


const favoriteSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"Cart"},

})

module.exports = mongoose.model("Favorite", favoriteSchema);