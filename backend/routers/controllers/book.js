const bookModel = require("../../db/models/book");
const NewBook = (req, res) => {

const {
    image,
    name,
    type,
    author,
    description,
    language,
    price,
    rating

}=req.body 

const Book = new bookModel({
    image,
    name,
    type,
    author,
    description,
    language,
    price,
    rating

})
Book.save()
.then()
.catch()

 
}
